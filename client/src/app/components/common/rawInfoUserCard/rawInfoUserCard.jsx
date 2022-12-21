import React from "react";
import stylesCSS from "./rawInfoUserCard.module.css";
import PropTypes from "prop-types";

const RawInfoUserCard = ({ title, label }) => {
    if (Array.isArray(label)) {
        return (
            <div className={stylesCSS.raw__info}>
                <h6>{title}:</h6>
                <div className={stylesCSS.column__info}>
                    {label.map((item) => (
                        <h6
                            key={item._id + "_label"}
                            className={stylesCSS.bold__text}
                        >
                            {item.name}
                        </h6>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className={stylesCSS.raw__info}>
                <h6>{title}:</h6>
                <h6 className={stylesCSS.bold__text__raw}>{label}</h6>
            </div>
        );
    }
};

RawInfoUserCard.propTypes = {
    title: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

export default RawInfoUserCard;
