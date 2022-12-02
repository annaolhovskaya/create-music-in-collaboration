import React from "react";
import stylesCSS from "./wrapper.module.css";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
    return (
        <div className={stylesCSS.main__content}>
            <div className={stylesCSS.container_custom}>
                <div className={stylesCSS.main__content_wraper}>{children}</div>
            </div>
        </div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Wrapper;
