import React from "react";
import PropTypes from "prop-types";

const BtnBlueSmall = ({ content }) => {
    return (
        <div className="buttons__column">
            <button className="btn__small btn--blue">{content}</button>
        </div>
    );
};

BtnBlueSmall.propTypes = {
    content: PropTypes.string.isRequired
};
export default BtnBlueSmall;
