import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentUserId } from "../../../store/users";
import { setNewData } from "../../../store/tracks";

const Offer = ({ track }) => {
    const dispatch = useDispatch();
    const currentUserId = useSelector(getCurrentUserId());

    const isOfferCooperation = track?.offer.some(
        (item) => item.userId === currentUserId
    );

    const isOfferAccepted = track?.offer.some((item) => item.accepted === true);

    const offerAcceptedAnotherUser = track?.offer.some(
        (item) => item.userId !== currentUserId && item.accepted === true
    );

    const handleClick = () => {
        if (!isOfferCooperation) {
            const offerObject = { accepted: false, userId: currentUserId };
            const updateTrackData = {
                ...track,
                offer: [...track.offer, offerObject]
            };
            dispatch(setNewData(updateTrackData));
        } else {
            const updateTrackData = {
                ...track,
                offer: [
                    ...track.offer.filter(
                        (item) => item.userId !== currentUserId
                    )
                ]
            };
            dispatch(setNewData(updateTrackData));
        }
    };

    return (
        <>
            {track.userId !== currentUserId ? (
                isOfferAccepted ? (
                    offerAcceptedAnotherUser ? (
                        <i
                            className="bi bi-patch-check"
                            style={{
                                fontSize: "25px",
                                color: "#fff",
                                marginLeft: "8px"
                            }}
                        ></i>
                    ) : (
                        <i
                            className="bi bi-patch-check"
                            style={{
                                fontSize: "25px",
                                color: "#fd8aff",
                                marginLeft: "8px"
                            }}
                        ></i>
                    )
                ) : (
                    <i
                        className={
                            "bi bi-patch-question" +
                            (isOfferCooperation ? "-fill" : "")
                        }
                        style={{
                            fontSize: "25px",
                            cursor: "pointer",
                            color: "#00dbde",
                            marginLeft: "8px"
                        }}
                        onMouseOver={(e) => (e.target.style.color = "#00c4c7")}
                        onMouseOut={(e) => (e.target.style.color = "#00dbde")}
                        onClick={handleClick}
                    ></i>
                )
            ) : null}
        </>
    );
};

Offer.propTypes = {
    track: PropTypes.object
};

export default Offer;
