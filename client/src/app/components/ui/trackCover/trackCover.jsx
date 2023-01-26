import React from "react";
import stylesCSS from "./trackCover.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setCurrentTrack } from "../../../store/tracks";

const TrackCover = ({ id, cover, albumId }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentTrack(id, albumId));
    };
    return (
        <div className={stylesCSS.track__cover} onClick={handleClick}>
            <img src={cover} className={stylesCSS.track__cover} />
        </div>
    );
};

TrackCover.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    albumId: PropTypes.string.isRequired
};

export default React.memo(TrackCover);
