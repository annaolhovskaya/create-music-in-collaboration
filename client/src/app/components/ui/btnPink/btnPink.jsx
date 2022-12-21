import React from "react";
import stylesCSS from "./btnPink.module.css";
import PropTypes from "prop-types";

const BtnPink = ({ content, onClick }) => {
    return (
        <div className={stylesCSS.buttons}>
            <button
                className={stylesCSS.button + " " + stylesCSS.btn__pink}
                href="#"
                onClick={onClick}
            >
                {content}
            </button>
        </div>
    );
};

BtnPink.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
export default BtnPink;
