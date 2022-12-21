import React from "react";
import stylesCSS from "./stylesList.module.css";
import Style from "../styleUI/style";
import PropTypes from "prop-types";
import { useStyles } from "../../../hooks/useStyles";

const StylesList = ({ styles }) => {
    const { isLoading } = useStyles();

    if (!isLoading) {
        return (
            <div className={stylesCSS.user__music__styles}>
                {styles.map((style) => (
                    <Style key={style} id={style} />
                ))}
            </div>
        );
    } else {
        return "Loading...";
    }
};

StylesList.propTypes = {
    styles: PropTypes.array
};

export default StylesList;
