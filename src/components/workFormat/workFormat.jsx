import React from "react";
import stylesCSS from "./workFormat.module.css";
import PropTypes from "prop-types";

const WorkFormat = ({ workFormat }) => {
    return (
        <div className={stylesCSS.label__item}>
            {workFormat.map((format) => {
                return (
                    <div
                        key={format._id}
                        className={
                            "label label--" +
                            (format.name === "remix" ? "pink" : "blue")
                        }
                    >
                        {format.name}
                    </div>
                );
            })}
        </div>
    );
};

WorkFormat.propTypes = {
    workFormat: PropTypes.array
};

export default WorkFormat;
