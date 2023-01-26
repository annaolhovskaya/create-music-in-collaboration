import React from "react";
import { useSelector } from "react-redux";
import { getAlbumIdByName } from "../../../store/albums";
import {
    getTracksByAlbumId,
    getTracksLoadingStatus
} from "../../../store/tracks";
import Loader from "../../common/loader/loader";
import RandomTrackList from "../randomTrackList/randomTrackList";

const NAME = "collaborations";

const CollabList = () => {
    const albumId = useSelector(getAlbumIdByName(NAME));
    const collabs = useSelector(getTracksByAlbumId(albumId));
    const isLoading = useSelector(getTracksLoadingStatus());

    if (!isLoading) {
        return <RandomTrackList data={collabs} />;
    } else {
        return <Loader />;
    }
};

export default CollabList;
