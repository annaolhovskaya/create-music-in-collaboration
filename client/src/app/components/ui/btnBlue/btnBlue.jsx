import React from "react";
import stylesCSS from "./btnBlue.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BtnBlue = ({ content, type, to, ...rest }) => {
    if (type === "link") {
        return (
            <Link to={to}>
                <div className={stylesCSS.buttons}>
                    <button
                        className={stylesCSS.button + " " + stylesCSS.btn__blue}
                    >
                        {content}
                    </button>
                </div>
            </Link>
        );
    }

    return (
        <div className={stylesCSS.buttons}>
            <button
                className={stylesCSS.button + " " + stylesCSS.btn__blue}
                {...rest}
            >
                {content}
            </button>
        </div>
    );
};

BtnBlue.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string,
    to: PropTypes.string
};
export default BtnBlue;
