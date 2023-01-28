import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getCurrentAlbumId,
    getCurrentTrack,
    getCurrentTrackId,
    getNextTrackId,
    getPrevTrackId,
    // getTrackByZeroIndex,
    // getTracks,
    getTracksLoadingStatus,
    setCurrentTrack
} from "../../../store/tracks";
import Bookmark from "../audioPlayer/buttonAudioPlayer/bookmark";
import stylesCSS from "./footer.module.css";
import PropTypes from "prop-types";
import Offer from "../offer/offer";

const SERVER_URI = "http://localhost:8080/";
const TRACKS_DIR_PATH = "tracks/";

const Footer = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getTracksLoadingStatus());

    const currentTrack = useSelector(getCurrentTrack());
    const currentTrackId = useSelector(getCurrentTrackId());

    const albumId = useSelector(getCurrentAlbumId(currentTrackId));

    const nextId = useSelector(getNextTrackId(currentTrackId));
    const prevId = useSelector(getPrevTrackId(currentTrackId));

    const handleClickNext = () => {
        dispatch(setCurrentTrack(nextId, albumId));
    };

    const handleClickPrevious = () => {
        dispatch(setCurrentTrack(prevId, albumId));
    };

    const handleEnd = () => {
        dispatch(setCurrentTrack(nextId, albumId));
    };

    if (!isLoading) {
        return (
            <div className={stylesCSS.container_custom}>
                <div className={stylesCSS.footer__inner}>
                    <div className={stylesCSS.bookmark}>
                        <Bookmark track={currentTrack} />
                        <Offer track={currentTrack} />
                    </div>
                    <div className={stylesCSS.track__info}>
                        <Link
                            to={`/users/${currentTrack.userId}`}
                            className={stylesCSS.link__nostyle}
                        >
                            <div className={stylesCSS.track__author}>
                                {currentTrack.author}
                            </div>
                        </Link>
                        <div> - </div>
                        <div className={stylesCSS.track__title}>
                            {currentTrack.title}
                        </div>
                    </div>

                    <AudioPlayer
                        volume="0.4"
                        src={SERVER_URI + TRACKS_DIR_PATH + currentTrack.link}
                        showSkipControls={true}
                        showJumpControls={false}
                        autoPlayAfterSrcChange={true}
                        showFilledVolume={true}
                        onClickNext={handleClickNext}
                        onClickPrevious={handleClickPrevious}
                        onEnded={handleEnd}
                        layout="horizontal-reverse"
                    />
                </div>
            </div>
        );
    }
};

Footer.propTypes = {
    isNotRenderPages: PropTypes.array
};

export default Footer;
