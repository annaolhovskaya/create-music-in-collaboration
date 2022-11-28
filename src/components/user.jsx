import React from "react";
import AvatarUser from "./avatarUser";
import Style from "./style";
import WorkFormat from "./workFormat";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { name, workFormat, styles } = user;

    return (
        <div className="user__item">
            <AvatarUser />
            <div className="user__info">
                <Link to="/user" className="link__nostyle">
                    <h3 className="user__item__name">{name}</h3>
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
