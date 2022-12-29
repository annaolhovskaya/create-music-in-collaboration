import React from "react";
import { Link } from "react-router-dom";
import stylesCSS from "./user.module.css";
import AvatarUser from "../../common/avatarUser/avatarUser";
import StylesList from "../stylesList/stylesList";
import WorkFormatList from "../workFormatList/workFormatList";
import PropTypes from "prop-types";
import { useExperience } from "../../../hooks/useExperience";

const User = ({ user }) => {
    const { _id, name, avatar, styles, workFormat, experience } = user;
    const { isLoading, getExperience } = useExperience();

    if (!isLoading) {
        const exp = getExperience(experience);

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
                                {name}
                            </h3>
                        </Link>
                        <h5 className={stylesCSS.icon}>
                            <i className={exp.icon}></i>
                        </h5>
                    </div>
                    <WorkFormatList workFormat={workFormat} />
                    <StylesList styles={styles} />
                </div>
            </div>
        );
    }
};

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User;
