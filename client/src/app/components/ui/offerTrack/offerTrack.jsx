import React from "react";
import Track from "../track/track";
import TrackCover from "../trackCover/trackCover";
import stylesCSS from "./offerTrack.module.css";
import PropTypes from "prop-types";

const OfferTrack = ({ tracks, userId, currentUserId }) => {
    return (
        <>
            {tracks.length && (
                <h5 className={stylesCSS.header}>
                    {userId === currentUserId
                        ? "Мои отклики"
                        : "Отклики пользователя"}
                </h5>
            )}
            {tracks.map((track) => (
                <div className={stylesCSS.track__list__block} key={track._id}>
                    <TrackCover
                        id={track._id}
                        cover={track.cover}
                        albumId={track.album}
                    />
                    <Track track={track} remark={true} />
                </div>
            ))}
        </>
    );
};

OfferTrack.propTypes = {
    tracks: PropTypes.array,
    userId: PropTypes.string,
    currentUserId: PropTypes.string
};

export default OfferTrack;
