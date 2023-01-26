import React from "react";
import { Link } from "react-router-dom";
import stylesCSS from "./user.module.css";
import AvatarUser from "../../common/avatarUser/avatarUser";
import StylesList from "../stylesList/stylesList";
import WorkFormatList from "../workFormatList/workFormatList";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getExperienceById } from "../../../store/experiences";
import { getUserById } from "../../../store/users";

const User = ({ userId }) => {
    const user = useSelector(getUserById(userId));
    const { _id, name, nickname, avatar, styles, workFormat, experience } =
        user;
    const exp = useSelector(getExperienceById(experience));

    return (
        <div className={stylesCSS.user__item}>
            <div className={stylesCSS.container__avatar}>
                <AvatarUser avatar={avatar} />
            </div>

            <div className={stylesCSS.user__info}>
                <div className={stylesCSS.user__title}>
                    <Link
                        to={`/users/${_id}`}
                        className={stylesCSS.link__nostyle}
                    >
                        <h3 className={stylesCSS.user__item__name}>
                            {name} / {nickname}
                        </h3>
                    </Link>
                    {exp && (
                        <h5 className={stylesCSS.icon}>
                            <i className={exp.icon}></i>
                        </h5>
                    )}
                </div>
                <WorkFormatList workFormat={workFormat} />
                <StylesList styles={styles} />
            </div>
        </div>
    );
};

User.propTypes = {
    userId: PropTypes.string.isRequired
};

export default User;
