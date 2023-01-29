import React from "react";
import Bookmark from "../bookmark";
import stylesCSS from "./track.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Offer from "../offer";
import { getUsersLoadingStatus } from "../../../store/users";
import { useSelector } from "react-redux";

const Track = ({ track, remark }) => {
    const isLoading = useSelector(getUsersLoadingStatus());
    const { title, author, userId } = track;

    if (!isLoading) {
        return (
            <>
                <div className={stylesCSS.container}>
                    <div className={stylesCSS.track__content}>
                        <div className={stylesCSS.track__list__info}>
                            <Link
                                to={`/users/${userId}`}
                                className={stylesCSS.link__nostyle}
                            >
                                <div className={stylesCSS.track__author}>
                                    {author}
                                </div>
                            </Link>

                            <div className={stylesCSS.track__title}>
                                {title}
                            </div>
                        </div>
                    </div>
                    {remark && (
                        <div className={stylesCSS.track__list__offer__bookmark}>
                            <Bookmark track={track} />
                            <Offer track={track} />
                        </div>
                    )}
                </div>
            </>
        );
    }
};

Track.propTypes = {
    track: PropTypes.object.isRequired,
    remark: PropTypes.bool
};

export default Track;
