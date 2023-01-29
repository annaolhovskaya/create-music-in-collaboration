import React from "react";
import stylesCSS from "./wrapperApp.module.css";
import PropTypes from "prop-types";

const WrapperApp = ({ children }) => {
    return <div className={stylesCSS.page}>{children}</div>;
};

WrapperApp.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default WrapperApp;
