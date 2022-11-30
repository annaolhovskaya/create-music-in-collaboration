import React from "react";
import styleCSS from "./contentWrapper.module.css";
import PropTypes from "prop-types";

const ContentWrapper = ({ children }) => {
    return <div className={styleCSS.users__content}>{children}</div>;
};

ContentWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ContentWrapper;
