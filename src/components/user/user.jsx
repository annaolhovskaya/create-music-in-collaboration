import React from "react";
import { Link } from "react-router-dom";
import stylesCSS from "./user.module.css";
import AvatarUser from "../avatarUser/avatarUser";
import Style from "../style";
import WorkFormat from "../workFormat/workFormat";
import PropTypes from "prop-types";

const User = ({ user }) => {
    const { name, workFormat, styles } = user;

    return (
        <div className={stylesCSS.user__item}>
            <AvatarUser />
            <div className={stylesCSS.user__info}>
                <Link to="/user" className={stylesCSS.link__nostyle}>
                    <h3 className={stylesCSS.user__item__name}>{name}</h3>
                </Link>
                <WorkFormat workFormat={workFormat} />
                <Style styles={styles} />
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User;
