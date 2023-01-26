import React from "react";
import stylesCSS from "./btnPink.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BtnPink = ({ content, type, to, ...rest }) => {
    if (type === "link") {
        return (
            <Link to={to}>
                <div className={stylesCSS.buttons}>
                    <button
                        className={stylesCSS.button + " " + stylesCSS.btn__pink}
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
                className={stylesCSS.button + " " + stylesCSS.btn__pink}
                {...rest}
            >
                {content}
            </button>
        </div>
    );
};

BtnPink.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string,
    to: PropTypes.string
};
export default BtnPink;
