import React from "react";
import { getAlbumIdByName } from "../../../store/albums";
import { useSelector } from "react-redux";
import {
    getTracksByAlbumId,
    getTracksLoadingStatus
} from "../../../store/tracks";
import TrackList from "../../ui/trackList/trackList";
import Loader from "../../common/loader/loader";

const NAME = "collaborations";

const CollaborationsPage = () => {
    const albumId = useSelector(getAlbumIdByName(NAME));
    const collabs = useSelector(getTracksByAlbumId(albumId));
    const isLoading = useSelector(getTracksLoadingStatus());

    if (!isLoading) {
        return <TrackList data={collabs} />;
    } else {
        return <Loader />;
    }
};

export default CollaborationsPage;
