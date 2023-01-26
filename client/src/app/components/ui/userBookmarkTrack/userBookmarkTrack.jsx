import React from "react";
import stylesCSS from "./userBookmarkTrack.module.css";
import PropTypes from "prop-types";
import Track from "../track/track";
import TrackCover from "../trackCover/trackCover";

const UserBookmarkTrack = ({ tracks, userId, currentUserId }) => {
    return (
        <>
            {tracks.length && (
                <h5 className={stylesCSS.header}>
                    {userId === currentUserId
                        ? "Избранное"
                        : "Избранное пользователя"}
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

UserBookmarkTrack.propTypes = {
    tracks: PropTypes.array,
    userId: PropTypes.string,
    currentUserId: PropTypes.string
};

export default UserBookmarkTrack;
