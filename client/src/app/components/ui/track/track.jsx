import React from "react";
import Bookmark from "../../ui/audioPlayer/buttonAudioPlayer/bookmark";
import stylesCSS from "./track.module.css";
import PropTypes from "prop-types";

const Track = ({ track }) => {
    if (track) {
        const { title, author } = track;
        return (
            <>
                <div className={stylesCSS.track__content}>
                    <div className={stylesCSS.track__list__info}>
                        <div className={stylesCSS.track__title}>{title}</div>
                        <div className={stylesCSS.track__author}>{author}</div>
                    </div>
                </div>
                <div className={stylesCSS.track__list__duration__bookmark}>
                    <div className={stylesCSS.track__list__duration}>2:13</div>
                    <Bookmark />
                </div>
            </>
        );
    }
    return "Loading...";
};

Track.propTypes = {
    track: PropTypes.object.isRequired
};

export default Track;
