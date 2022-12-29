import React from "react";
import stylesCSS from "./stylesList.module.css";
import Style from "../styleUI/style";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getStylesByIds, getStylesLoadingStatus } from "../../../store/styles";

const StylesList = ({ styles }) => {
    const isLoading = useSelector(getStylesLoadingStatus());
    if (isLoading) return "Loading...";
    const stylesList = useSelector(getStylesByIds(styles));

    return (
        <div className={stylesCSS.user__music__styles}>
            {stylesList.map((style) => (
                <Style key={style._id} {...style} />
            ))}
        </div>
    );
};

StylesList.propTypes = {
    styles: PropTypes.array
};

export default StylesList;
