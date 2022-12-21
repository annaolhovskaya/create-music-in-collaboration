import React from "react";
import stylesCSS from "./btnBlueSmall.module.css";
import PropTypes from "prop-types";

const BtnBlueSmall = ({ content }) => {
    return (
        <div className={stylesCSS.buttons__column}>
            <button
                className={stylesCSS.btn__small + " " + stylesCSS.btn__blue}
            >
                {content}
            </button>
        </div>
    );
};

BtnBlueSmall.propTypes = {
    content: PropTypes.string.isRequired
};
export default BtnBlueSmall;
