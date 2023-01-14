import React from "react";
import PauseBtn from "./pauseBtn";
import PlayBtn from "./playBtn";
import PropTypes from "prop-types";

const PlayPauseBtnWrapper = ({ isPlaying, onClick }) => {
    return <>{isPlaying ? <PlayBtn /> : <PauseBtn />}</>;
};

PlayPauseBtnWrapper.propTypes = {
    isPlaying: PropTypes.bool,
    onClick: PropTypes.func
};

export default PlayPauseBtnWrapper;
