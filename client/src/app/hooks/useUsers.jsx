import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import userService from "../services/user.service";
import PropTypes from "prop-types";

const UserContext = React.createContext();

export const useUsers = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsersList();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(error);
        }
    }, [error]);

    async function getUsersList() {
        try {
            const { content } = await userService.get();
            setUsers(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function getUser(id) {
        return users.find((u) => u._id === id);
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    return (
        <UserContext.Provider value={{ users, isLoading, getUser }}>
            {!isLoading ? children : "Loading..."}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
