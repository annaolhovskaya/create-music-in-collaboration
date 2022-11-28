import React from "react";
import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
    return (
        <div className="main__content">
            <div className="container">
                <div className="main__content_wraper">{children}</div>
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
