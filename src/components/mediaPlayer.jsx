import React, { useState, useRef, useEffect } from "react";
import PrevBtn from "./mediaPlayer/prevBtn";
import NextBtn from "./mediaPlayer/nextBtn";
import Bookmark from "./mediaPlayer/bookmark";
import PlayBtn from "./mediaPlayer/playBtn";
import BtnWrapper from "./mediaPlayer/btnWrapper";
import PauseBtn from "./mediaPlayer/pauseBtn";

const tracks = [
    {
        author: "Amonita",
        title: "Stay",
        link: "/static/media/Amonita-Stay.00692d4554b121b72878.mp3"
    },
    {
        author: "CamelPhat",
        title: "Silenced Argy",
        link: "/static/media/CamelPhat-Silenced Argy.e111fc232086a9c90cbc.mp3"
    },
    {
        author: "Cristoph",
        title: "Turning Away",
        link: "/static/media/Cristoph-Turning Away.0f1a82c46997bcf0d582.mp3"
    },
    {
        author: "David Rossi",
        title: "The Heights Garden State",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Deviu",
        title: "Espeleteia",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Double Touch",
        title: "True",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Dowden",
        title: "Middle Earthrue",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "DSF",
        title: "Loving You",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "DSF",
        title: "Tell Me About It",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Essco",
        title: "Submerge",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Fabaria",
        title: "Peace Pill",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Fernando Ferreyra",
        title: "The Color of Your Eyes Amulanga",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Frank Klassen",
        title: "Alive",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Golan Zocher",
        title: "Negev",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    },
    {
        author: "Julia Gherber",
        title: "Lullaby",
        link: "/static/media/David Rossi-The Heights Garden State.1ca017b9f53de8fba272.mp3"
    }
];

const MediaPlayer = () => {
    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();
    const volumeBar = useRef();
    const [trackIndex, setTrackIndex] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        volumeBar.current.style.setProperty(
            "--seek-before-width",
            `${volumeBar.current.value}%`
        );
        setCurrentTrack(tracks[trackIndex]);
    }, []);

    useEffect(() => {
        if (audioPlayer) {
            audioPlayer.current.volume = volume;
        }
    }, [volume]);

    useEffect(() => {
        setCurrentTrack(tracks[trackIndex]);
    }, [trackIndex]);

    useEffect(() => {
        const seconds = Math.floor(audioPlayer?.current?.duration);
        setDuration(calculateTime(seconds));
        progressBar.current.max = seconds;
    }, [currentTrack, audioPlayer?.current?.readyState]);

    const togglePlayPause = () => {
        if (!isPlaying) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
        setIsPlaying((prevState) => !prevState);
    };

    const handleNext = () => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex((prevState) => prevState + 1);
        }
    };

    const handlePrev = () => {
        if (trackIndex > 0) {
            setTrackIndex((prevState) => prevState - 1);
        }
    };

    const calculateTime = (secs) => {
        if (secs && !isNaN(secs)) {
            const minutes = Math.floor(secs / 60);
            const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(secs % 60);
            const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${returnedMinutes}:${returnedSeconds}`;
        }
        // return "00:00";
    };

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    };

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    };

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty(
            "--seek-before-width",
            `${(progressBar.current.value / duration) * 100}%`
        );
        setCurrentTime(progressBar.current.value);
    };

    const changePlayerVolume = () => {
        volumeBar.current.style.setProperty(
            "--seek-before-width",
            `${volumeBar.current.value}%`
        );
    };

    const changeRangeVolume = (value) => {
        setVolume(value);
        audioPlayer.current.volume = volumeBar.current.value / 100;
        changePlayerVolume();
    };

    // const renderTime = () => {
    //     if (!isPlaying) {
    //         return calculateTime(duration);
    //     } else {
    //         return calculateTime(currentTime);
    //     }
    // };

    // const handleVolume = (q) => {
    //     setVolume(q);
    // };

    return (
        <>
            <audio
                ref={audioPlayer}
                preload="metadata"
                src={currentTrack.link}
            />
            <div className="media__player">
                <BtnWrapper>
                    <button className="btn__nostyle" onClick={togglePlayPause}>
                        {isPlaying ? <PauseBtn /> : <PlayBtn />}
                    </button>
                    <button className="btn__nostyle" onClick={handlePrev}>
                        <PrevBtn />
                    </button>
                    <button className="btn__nostyle" onClick={handleNext}>
                        <NextBtn />
                    </button>
                </BtnWrapper>

                <div className="track__block">
                    <div className="track__content">
                        <div className="track__info">
                            <div className="track__title">
                                {currentTrack.title}
                            </div>
                            <div className="track__author">
                                {currentTrack.author}
                            </div>
                        </div>
                        <div className="track__duration">
                            <div className="duration">
                                {/* {renderTime()} */}
                                {/* {duration &&
                                    !isNaN(duration) &&
                                    calculateTime(duration)} */}
                                {isPlaying
                                    ? calculateTime(currentTime)
                                    : duration}
                            </div>
                        </div>
                    </div>
                    <div className="progress__container">
                        <input
                            className="progress"
                            type="range"
                            defaultValue="0"
                            ref={progressBar}
                            onChange={changeRange}
                        />
                    </div>
                </div>

                <div className="track__volume">
                    <div className="volume__container">
                        <input
                            className="volume__slider"
                            value={volume * 100}
                            type="range"
                            ref={volumeBar}
                            onChange={(e) =>
                                changeRangeVolume(e.target.value / 100)
                            }
                        />
                    </div>
                </div>
                <Bookmark />
            </div>
        </>
    );
};

// MediaPlayer.propTypes = {
//     tracks: PropTypes.array.isRequired
// };

export default MediaPlayer;
