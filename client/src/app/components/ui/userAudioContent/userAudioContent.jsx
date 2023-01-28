import React from "react";
import stylesCSS from "./userAudioContent.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getBookmarkTracks,
    getOfferTracks,
    getTracksByUserId,
    getTracksLoadingStatus
} from "../../../store/tracks";
import { getCurrentUserId } from "../../../store/users";
import Loader from "../../common/loader/loader";
import ContentWrapper from "../contentWrapper/contentWrapper";
import UserBookmarkTrack from "../userBookmarkTrack/userBookmarkTrack";
import UserTrack from "../userTrack/userTrack";
import OfferTrack from "../offerTrack/offerTrack";

const UserAudioContent = () => {
    const { userId } = useParams();
    const currentUserId = useSelector(getCurrentUserId());
    const userTracks = useSelector(getTracksByUserId(userId));
    const offerTracks = useSelector(getOfferTracks(userId));
    const isLoading = useSelector(getTracksLoadingStatus());
    const bookmarkTracks = useSelector(getBookmarkTracks(userId));

    if (isLoading) return <Loader />;

    return (
        <ContentWrapper>
            {userTracks.length ? (
                <UserTrack
                    userId={userId}
                    currentUserId={currentUserId}
                    tracks={userTracks}
                />
            ) : null}
            {offerTracks.length ? (
                <OfferTrack
                    userId={userId}
                    currentUserId={currentUserId}
                    tracks={offerTracks}
                />
            ) : null}
            {bookmarkTracks.length ? (
                <UserBookmarkTrack
                    tracks={bookmarkTracks}
                    userId={userId}
                    currentUserId={currentUserId}
                />
            ) : null}
            {!userTracks.length &&
                !bookmarkTracks.length &&
                !offerTracks.length &&
                (currentUserId === userId ? (
                    <h6 className={stylesCSS.description}>
                        Здесь будут отобржаться ваши треки, отклики и
                        избранное...
                    </h6>
                ) : (
                    <h6 className={stylesCSS.description}>
                        Здесь будут отобржаться треки пользователя, его отклики
                        и избранное...
                    </h6>
                ))}
        </ContentWrapper>
    );
};

export default UserAudioContent;
