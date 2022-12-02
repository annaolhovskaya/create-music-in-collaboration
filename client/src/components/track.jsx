import React from "react";
import Bookmark from "./mediaPlayer/bookmark";
import PropTypes from "prop-types";

const Track = ({ track }) => {
    if (track) {
        const { title, author } = track;
        return (
            <>
                <div className="track__content">
                    <div className="track__list__info">
                        <div className="track__title">{title}</div>
                        <div className="track__author">{author}</div>
                    </div>
                </div>
                <div className="track__list__duration__bookmark">
                    <div className="track__list__duration">2:13</div>
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
