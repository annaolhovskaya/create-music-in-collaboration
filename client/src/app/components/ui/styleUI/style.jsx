import React from "react";
import stylesCSS from "./style.module.css";
import PropTypes from "prop-types";
import { useStyles } from "../../../hooks/useStyles";

const Style = ({ id }) => {
    const { getStyle } = useStyles();
    const { name } = getStyle(id);

    return <div className={stylesCSS.music__styles__item}>{name}</div>;
};

Style.propTypes = {
    id: PropTypes.string
};

export default Style;
