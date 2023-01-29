import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewData } from "../../store/tracks";
import { getCurrentUserId } from "../../store/users";
import PropTypes from "prop-types";

const Bookmark = ({ track }) => {
    const dispatch = useDispatch();
    const currentUserId = useSelector(getCurrentUserId());
    const isBookmark = track?.bookmarkId.includes(currentUserId);

    const handleClick = () => {
        if (!isBookmark) {
            const updateTrackData = {
                ...track,
                bookmarkId: [...track.bookmarkId, currentUserId]
            };
            dispatch(setNewData(updateTrackData));
        } else {
            const updateTrackData = {
                ...track,
                bookmarkId: [
                    ...track.bookmarkId.filter((item) => item !== currentUserId)
                ]
            };
            dispatch(setNewData(updateTrackData));
        }
    };

    return (
        <>
            {track.userId !== currentUserId && (
                <i
                    className={"bi bi-heart" + (isBookmark ? "-fill" : "")}
                    style={{
                        fontSize: "25px",
                        cursor: "pointer",
                        color: "#00dbde",
                        marginRight: "7px"
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#00c4c7")}
                    onMouseOut={(e) => (e.target.style.color = "#00dbde")}
                    onClick={handleClick}
                ></i>
            )}
        </>
    );
};

Bookmark.propTypes = {
    track: PropTypes.object
};

export default Bookmark;
