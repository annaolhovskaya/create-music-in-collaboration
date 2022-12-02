import React from "react";
import PropTypes from "prop-types";

const BtnWrapper = ({ children }) => {
    return <div className="buttons__media__player">{children}</div>;
};

BtnWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default BtnWrapper;
