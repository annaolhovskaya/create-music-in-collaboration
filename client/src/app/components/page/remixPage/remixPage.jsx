import React from "react";
import { useSelector } from "react-redux";
import { getAlbumIdByName } from "../../../store/albums";
import {
    getTracksByAlbumId,
    getTracksLoadingStatus
} from "../../../store/tracks";
import Loader from "../../common/loader/loader";
import TrackList from "../../ui/trackList/trackList";

const NAME = "remixes";

const RemixPage = () => {
    const albumId = useSelector(getAlbumIdByName(NAME));
    console.log("albumId", albumId);
    const remixes = useSelector(getTracksByAlbumId(albumId));
    const isLoading = useSelector(getTracksLoadingStatus());

    if (!isLoading) {
        return <TrackList data={remixes} />;
    } else {
        return <Loader />;
    }
};

export default RemixPage;
