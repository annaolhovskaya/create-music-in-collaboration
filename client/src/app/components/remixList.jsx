import React from "react";
import { useSelector } from "react-redux";
import { getAlbumIdByName } from "../store/albums";
import { getTracksByAlbumId, getTracksLoadingStatus } from "../store/tracks";
import Loader from "./common/loader/loader";
import RandomTrackList from "./ui/randomTrackList/randomTrackList";

const NAME = "remixes";

const RemixList = () => {
    const albumId = useSelector(getAlbumIdByName(NAME));
    const remixes = useSelector(getTracksByAlbumId(albumId));
    const isLoading = useSelector(getTracksLoadingStatus());

    if (!isLoading) {
        return <RandomTrackList data={remixes} />;
    } else {
        return <Loader />;
    }
};

export default RemixList;
