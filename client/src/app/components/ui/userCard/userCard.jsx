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

const UserCard = ({ user, setActive }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };

    const handleActive = () => {
        setActive((prevState) => !prevState);
    };

    const currentUserId = useSelector(getCurrentUserId());

    const experience = useSelector(getExperienceById(user.experience));

    const daw = useSelector(getDawsByIds(user.daw));
    const styles = useSelector(getStylesByIds(user.styles));

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
                        ????????:
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
                <RawInfoUserCard title="??????????" label={user.city} />
                <RawInfoUserCard title="????????????" label={user.country} />
                <RawInfoUserCard title="?????????????? DAW" label={daw} />
                <RawInfoUserCard title="?????????? ????????????" label={styles} />
            </div>
            {user.soundCloud && (
                <div className={stylesCSS.container__buttons}>
                    <a href={user.soundCloud} target="blank">
                        <BtnPink content="?????? ?????????????? soundcloud" />
                    </a>
                </div>
            )}
            <div className={stylesCSS.container__buttons}>
                <div className={stylesCSS.buttons__raw}>
                    <BtnBlue content="???????????????? ?? ????????????" />
                    <BtnBlue content="???????????????? ??????" />
                </div>
            </div>
            <BtnPink content="???????????????? ????????-????????????" onClick={handleActive} />
            {/* <div onClick={handleClick}>
            <BtnPink content="?????? ????????????????????????" />
        </div> */}
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
