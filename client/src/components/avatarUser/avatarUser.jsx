import React from "react";
import stylesCSS from "./avatarUser.module.css";

const AvatarUser = () => {
    return (
        <img
            className={stylesCSS.user__avatar}
            src={`https://avatars.dicebear.com/api/avataaars/${(
                Math.random() + 1
            )
                .toString(36)
                .substring(7)}.svg`}
            // src={user.image}
        />
    );
};

export default AvatarUser;
