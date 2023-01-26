import React from "react";
import { useHistory } from "react-router-dom";
import AvatarUser from "../../common/avatarUser/avatarUser";
import RawInfoUserCard from "../../common/rawInfoUserCard/rawInfoUserCard";
import BtnBlue from "../btnBlue/btnBlue";
import BtnPink from "../btnPink/btnPink";
import ContentWrapper from "../contentWrapper/contentWrapper";
import stylesCSS from "./userCard.module.css";
import PropTypes from "prop-types";
import WorkFormatList from "../workFormatList/workFormatList";
import { useSelector } from "react-redux";
import { getStylesByIds } from "../../../store/styles";
import { getDawsByIds } from "../../../store/daws";
import { getExperienceById } from "../../../store/experiences";
import { getCurrentUserId } from "../../../store/users";
import {
    getTracksByUserId,
    getTracksLoadingStatus
} from "../../../store/tracks";
import TelegramIcon from "../../common/socialIcons/telegramIcon/telegramIcon";
import InstagramIcon from "../../common/socialIcons/instagramIcon/instagramIcon";

const UserCard = ({ user, setActive }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    const currentUserId = useSelector(getCurrentUserId());

    const experience = useSelector(getExperienceById(user.experience));

    const daw = useSelector(getDawsByIds(user.daw));
    const styles = useSelector(getStylesByIds(user.styles));

    const tracksUser = useSelector(getTracksByUserId(user._id));
    const isLoading = useSelector(getTracksLoadingStatus());
    const arrayOffer = [];
    if (!isLoading) {
        if (tracksUser.length > 0) {
            for (let i = 0; i < tracksUser.length; i++) {
                tracksUser.forEach((item) => arrayOffer.push(item.offer[i]));
            }
        }
    }
    const isOfferAccepted = arrayOffer.some(
        (item) => item.userId === currentUserId && item.accepted
    );

    return (
        <ContentWrapper>
            {user._id === currentUserId && (
                <button
                    className={stylesCSS.icon__settings}
                    onClick={handleClick}
                >
                    <i className="bi bi-gear"></i>
                </button>
            )}
            <div className={stylesCSS.container__avatar__xl}>
                <AvatarUser avatar={user.avatar} />
            </div>
            <div>
                <div className={stylesCSS.user__name}>{user.name}</div>
                <div className={stylesCSS.user__nickname}>
                    nickname:
                    <div className={stylesCSS.bold__text}>{user.nickname}</div>
                </div>
                {experience && (
                    <div className={stylesCSS.user__nickname}>
                        опыт:
                        <div className={stylesCSS.bold__text}>
                            {experience.name}
                        </div>
                        <h5 className={stylesCSS.icon}>
                            <i className={experience.icon}></i>
                        </h5>
                    </div>
                )}
            </div>
            <div className={stylesCSS.user__workformat}>
                <WorkFormatList workFormat={user.workFormat} />
            </div>
            <div className={stylesCSS.user__info}>
                <RawInfoUserCard title="город" label={user.city} />
                <RawInfoUserCard title="страна" label={user.country} />
                <RawInfoUserCard title="рабочая DAW" label={daw} />
                <RawInfoUserCard title="стили музыки" label={styles} />
            </div>
            {user.soundCloud && (
                <div className={stylesCSS.container__buttons}>
                    <a href={user.soundCloud} target="blank">
                        <BtnPink content="профиль soundcloud" />
                    </a>
                </div>
            )}

            {(isOfferAccepted || user._id === currentUserId) && (
                <div className={stylesCSS.user__info__contact}>
                    <RawInfoUserCard title="e-mail" label={user.contactEmail} />
                    <div className={stylesCSS.social__icons}>
                        {user.telegram !== "" && (
                            <TelegramIcon
                                type="link"
                                href={user.telegram}
                                style={{
                                    fontSize: "45px",
                                    cursor: "pointer",
                                    color: "#00dbde"
                                }}
                            />
                        )}
                        {user.instagram !== "" && (
                            <InstagramIcon
                                type="link"
                                href={user.instagram}
                                style={{
                                    fontSize: "45px",
                                    cursor: "pointer",
                                    color: "#00dbde"
                                }}
                            />
                        )}
                    </div>
                </div>
            )}
            {user._id === currentUserId && (
                <BtnBlue
                    content="добавить демо-запись"
                    onClick={() => setActive((prevState) => !prevState)}
                />
            )}
        </ContentWrapper>
    );
};

UserCard.propTypes = {
    user: PropTypes.object,
    experience: PropTypes.object,
    daw: PropTypes.array,
    setActive: PropTypes.func
};

export default UserCard;
