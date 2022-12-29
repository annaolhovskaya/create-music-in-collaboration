import React from "react";
import stylesCSS from "./style.module.css";
import PropTypes from "prop-types";

const Style = ({ name }) => {
    return <div className={stylesCSS.music__styles__item}>{name}</div>;
};

Style.propTypes = {
    name: PropTypes.string
};

export default Style;
