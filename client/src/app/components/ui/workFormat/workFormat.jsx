import React from "react";
import stylesCSS from "./workFormat.module.css";
import PropTypes from "prop-types";

const WorkFormat = ({ name }) => {
    return (
        <div
            className={
                stylesCSS.label +
                " " +
                (name === "remix"
                    ? stylesCSS.label__pink
                    : stylesCSS.label__blue)
            }
        >
            {name}
        </div>
    );
};

WorkFormat.propTypes = {
    name: PropTypes.string
};

export default WorkFormat;
