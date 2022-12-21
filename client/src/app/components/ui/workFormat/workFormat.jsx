import React from "react";
import stylesCSS from "./workFormat.module.css";
import PropTypes from "prop-types";
import { useWorkFormats } from "../../../hooks/useWorkFormats";

const WorkFormat = ({ id }) => {
    const { getFormat } = useWorkFormats();
    const { name } = getFormat(id);

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
    id: PropTypes.string
};

export default WorkFormat;
