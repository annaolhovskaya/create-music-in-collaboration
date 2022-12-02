import React from "react";
import PropTypes from "prop-types";

const BtnBlue = ({ content }) => {
    return (
        <div className="buttons">
            <button className="button btn--blue" href="#">
                {content}
            </button>
        </div>
    );
};

BtnBlue.propTypes = {
    content: PropTypes.string.isRequired
};
export default BtnBlue;
