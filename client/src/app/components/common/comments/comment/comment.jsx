import React from "react";
// import api from "../../../../api";
import PropTypes from "prop-types";
import { displayDate } from "../../../../utils/displayDate";
import stylesCSS from "./comment.module.css";
import AvatarUser from "../../avatarUser/avatarUser";
import { Link } from "react-router-dom";
import { useUsers } from "../../../../hooks/useUsers";
import { useAuth } from "../../../../hooks/useAuth";

const Comment = ({
    content,
    _id: id,
    created_at: created,
    userId,
    onRemove
}) => {
    const { getUserById } = useUsers();
    const user = getUserById(userId);
    const { currentUser } = useAuth();

    return (
        <div className="card">
            <div className={stylesCSS.user__item}>
                <div className={stylesCSS.container__avatar}>
                    <AvatarUser avatar={user.avatar} />
                </div>
                <div className={stylesCSS.user__info}>
                    {user && (
                        <div>
                            <div className={stylesCSS.comment__info}>
                                <h4 className={stylesCSS.comment__author}>
                                    <Link
                                        to={`/users/${userId}`}
                                        className={stylesCSS.link__nostyle}
                                    >
                                        {user && user.name}
                                    </Link>
                                    <span className="normal">
                                        - {displayDate(created)}
                                    </span>
                                </h4>
                            </div>

                            <p className="normal mb-0">{content}</p>
                        </div>
                    )}
                    {currentUser._id === userId && (
                        <div className={stylesCSS.btn__delete}>
                            <button
                                className="btn btn-sm text-primary d-flex align-items-center"
                                onClick={() => onRemove(id)}
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Comment.propTypes = {
    content: PropTypes.string,
    _id: PropTypes.string,
    created_at: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    userId: PropTypes.string,
    onRemove: PropTypes.func
};

export default Comment;
