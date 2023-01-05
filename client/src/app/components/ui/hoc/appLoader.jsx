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

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const usersStatusLoading = useSelector(getUsersLoadingStatus());

    useEffect(() => {
        dispatch(loadStylesList());
        dispatch(loadDawsList());
        dispatch(loadWorkformatsList());
        dispatch(loadExperiencesList());

        if (isLoggedIn) dispatch(loadUsersList());
    }, [isLoggedIn]);

    if (usersStatusLoading) return "Loading...";

    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
