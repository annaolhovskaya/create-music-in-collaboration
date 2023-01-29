import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, loadTracksList } from "../../../store/tracks";
import PropTypes from "prop-types";

const TracksLoader = ({ children }) => {
    const dispatch = useDispatch();
    const dataStatus = useSelector(getDataStatus());

    useEffect(() => {
        if (!dataStatus) dispatch(loadTracksList());
    }, []);

    if (!dataStatus) return "...";
    return children;
};

TracksLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default TracksLoader;
