import React from "react";
import stylesCSS from "./btnBlue.module.css";
import PropTypes from "prop-types";

const BtnBlue = ({ content }) => {
    return (
        <div className={stylesCSS.buttons}>
            <button
                className={stylesCSS.button + " " + stylesCSS.btn__blue}
                href="#"
            >
                {content}
            </button>
        </div>
    );
};

BtnBlue.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
export default BtnBlue;
