import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
    getIsLoggedIn,
    getUsersLoadingStatus,
    loadUsersList
} from "../../../store/users";
import { loadStylesList } from "../../../store/styles";
import { loadDawsList } from "../../../store/daws";
import { loadWorkformatsList } from "../../../store/workformats";
import { loadExperiencesList } from "../../../store/experiences";
import { getTracksLoadingStatus, loadTracksList } from "../../../store/tracks";
import { loadAlbumsList } from "../../../store/albums";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    const tracksStatusLoading = useSelector(getTracksLoadingStatus());

    useEffect(() => {
        dispatch(loadStylesList());
        dispatch(loadDawsList());
        dispatch(loadWorkformatsList());
        dispatch(loadExperiencesList());
        // dispatch(loadTracksList());
        dispatch(loadAlbumsList());

        if (isLoggedIn) {
            dispatch(loadUsersList());
            dispatch(loadTracksList());
        }
    }, [isLoggedIn]);

    if (usersStatusLoading && tracksStatusLoading) return "Loading...";

    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
