import React from "react";
import stylesCSS from "./telegramIcon.module.css";
import PropTypes from "prop-types";

const TelegramIcon = ({ type, href, style, hoverColor, color, ...rest }) => {
    if (type === "link") {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={stylesCSS.anchor}
            >
                <i
                    className="bi bi-telegram"
                    style={style}
                    onMouseOver={(e) => (e.target.style.color = "#00c4c7")}
                    onMouseOut={(e) => (e.target.style.color = "#00dbde")}
                ></i>
            </a>
        );
    }
    return <i className="bi bi-telegram" style={style} {...rest}></i>;
};

TelegramIcon.propTypes = {
    type: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.object,
    hoverColor: PropTypes.string,
    color: PropTypes.string
};

export default TelegramIcon;
