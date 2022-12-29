import React from "react";
import stylesCSS from "./avatarUser.module.css";
import PropTypes from "prop-types";

const AvatarUser = ({ avatar }) => {
    return <img className={stylesCSS.user__avatar} src={avatar} alt="avatar" />;
};

AvatarUser.propTypes = {
    avatar: PropTypes.string.isRequired
};

export default AvatarUser;
