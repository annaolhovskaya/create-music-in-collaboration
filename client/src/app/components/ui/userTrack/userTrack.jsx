import React, { useState } from "react";
import stylesCSS from "./userTrack.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeTrack, setNewData } from "../../../store/tracks";
import Track from "../track/track";
import TrackCover from "../trackCover/trackCover";
import Modal from "../../common/modal/modal";
import User from "../user/user";
import BtnBlueSmall from "../btnBlueSmall/btnBlueSmall";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { getCurrentUserData } from "../../../store/users";

const UserTrack = ({ userId, currentUserId, tracks }) => {
    const dispatch = useDispatch();
    const [modalActive, setModalActive] = useState(false);
    const [trackModal, setTrackModal] = useState();
    const [accepted, setAccepted] = useState(false);

    const currentUser = useSelector(getCurrentUserData());
    console.log("currentUser", currentUser);

    const handleClick = (track) => {
        setModalActive((prevState) => !prevState);
        setTrackModal(track);
    };

    const handleOfferAccept = (userId) => {
        const acceptOffer = trackModal.offer.map((item) => {
            return item.userId === userId ? { ...item, accepted: true } : item;
        });
        const updateTrackData = {
            ...trackModal,
            offer: acceptOffer
        };
        dispatch(setNewData(updateTrackData));
        // dispatch(updateUser())
        setAccepted((prevState) => !prevState);
    };

    const handleRemoveTrack = (track) => {
        dispatch(removeTrack(track));
    };

    return (
        <>
            {tracks.length && (
                <h5 className={stylesCSS.header}>
                    {userId === currentUserId
                        ? "Мои треки"
                        : "Треки пользователя"}
                </h5>
            )}
            {}
            <Modal
                active={modalActive}
                setActive={setModalActive}
                currentUserId={currentUserId}
                type="offer"
            >
                {trackModal &&
                    trackModal.offer.map((item) => (
                        <>
                            <div
                                className={stylesCSS.all__users__items}
                                key={nanoid()}
                            >
                                <User userId={item.userId} />
                                {!item.accepted &&
                                    !trackModal.offer.some(
                                        (item) => item.accepted === true
                                    ) && (
                                        <>
                                            {!accepted && !item.accepted && (
                                                <BtnBlueSmall
                                                    content="сотрудничать"
                                                    userId={item.userId}
                                                    trackId={trackModal._id}
                                                    onClick={handleOfferAccept}
                                                />
                                            )}
                                        </>
                                    )}
                            </div>
                            {(accepted || item.accepted) && (
                                <p>
                                    Поздравляем! Теперь вам доступны контактные
                                    данные этого пользователя. Свяжитесь с ним
                                    для начала совместной работы над треком!
                                </p>
                            )}
                        </>
                    ))}
            </Modal>
            {tracks.map((track) => (
                <div
                    className={stylesCSS.container}
                    key={"track_offer_" + track._id}
                >
                    <div className={stylesCSS.track__list__block}>
                        <TrackCover
                            id={track._id}
                            cover={track.cover}
                            albumId={track.album}
                        />
                        <Track
                            track={track}
                            setActive={setModalActive}
                            remark={userId !== currentUserId}
                        />
                    </div>
                    <div className={stylesCSS.container__btn}>
                        {userId === currentUserId && track.offer.length > 0 && (
                            <BtnBlueSmall
                                content="Отклики"
                                onClick={() => handleClick(track)}
                            />
                        )}
                        {userId === currentUserId && (
                            <div className={stylesCSS.btn__delete}>
                                <button
                                    className="btn btn-sm text-primary d-flex align-items-center"
                                    onClick={() => handleRemoveTrack(track)}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

UserTrack.propTypes = {
    userId: PropTypes.string,
    currentUserId: PropTypes.string,
    tracks: PropTypes.array
};

export default UserTrack;
