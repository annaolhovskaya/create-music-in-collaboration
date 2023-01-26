import React from "react";
import stylesCSS from "./btnBlueSmall.module.css";
import PropTypes from "prop-types";

const BtnBlueSmall = ({ type, content, userId, trackId, onClick, ...rest }) => {
    if (type === "submit") {
        return (
            <div className={stylesCSS.buttons__column}>
                <button
                    type="submit"
                    className={stylesCSS.btn__small + " " + stylesCSS.btn__blue}
                    {...rest}
                >
                    {content}
                </button>
            </div>
        );
    }
    return (
        <div className={stylesCSS.buttons__column}>
            <button
                className={stylesCSS.btn__small + " " + stylesCSS.btn__blue}
                onClick={() => onClick(userId, trackId)}
            >
                {content}
            </button>
        </div>
    );
};

BtnBlueSmall.propTypes = {
    type: PropTypes.string,
    content: PropTypes.string.isRequired,
    userId: PropTypes.string,
    trackId: PropTypes.string,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};
export default BtnBlueSmall;
