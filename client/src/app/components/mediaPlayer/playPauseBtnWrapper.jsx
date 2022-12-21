import React from "react";
import PauseBtn from "./pauseBtn";
import PlayBtn from "./pauseBtn";
import PropTypes from "prop-types";

const PlayPauseBtnWrapper = ({ isPlaying }) => {
    return <>{isPlaying ? <PlayBtn /> : <PauseBtn />}</>;
};

PlayPauseBtnWrapper.propTypes = {
    isPlaying: PropTypes.bool
};

export default PlayPauseBtnWrapper;
