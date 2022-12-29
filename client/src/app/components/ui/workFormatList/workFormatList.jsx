import React from "react";
import stylesCSS from "./workFormatList.module.css";
import PropTypes from "prop-types";
import WorkFormat from "../workFormat/workFormat";
import { useSelector } from "react-redux";
import {
    getWorkformatsByIds,
    getWorkformatsLoadingStatus
} from "../../../store/workformats";

const WorkFormatList = ({ workFormat }) => {
    const isLoading = useSelector(getWorkformatsLoadingStatus());
    if (isLoading) return "Loading...";
    const formatsList = useSelector(getWorkformatsByIds(workFormat));

    return (
        <div className={stylesCSS.label__item}>
            {formatsList.map((format) => (
                <WorkFormat key={format._id} {...format} />
            ))}
        </div>
    );
};

WorkFormatList.propTypes = {
    workFormat: PropTypes.array
};

export default WorkFormatList;
