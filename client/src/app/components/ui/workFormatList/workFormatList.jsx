import React from "react";
import stylesCSS from "./workFormatList.module.css";
import PropTypes from "prop-types";
import { useWorkFormats } from "../../../hooks/useWorkFormats";
import WorkFormat from "../workFormat/workFormat";

const WorkFormatList = ({ workFormat }) => {
    const { isLoading } = useWorkFormats();

    if (!isLoading) {
        return (
            <div className={stylesCSS.label__item}>
                {workFormat.map((format) => (
                    <WorkFormat key={format} id={format} />
                ))}
            </div>
        );
    }
    return "Loading...";
};

WorkFormatList.propTypes = {
    workFormat: PropTypes.array
};

export default WorkFormatList;
