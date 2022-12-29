import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import userService from "../services/user.service";
import PropTypes from "prop-types";
import { useAuth } from "./useAuth";

const UserContext = React.createContext();

export const useUsers = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const { currentUser } = useAuth();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsersList();
    }, []);

    useEffect(() => {
        if (currentUser) {
            const newUsers = [...users];
            const indexUser = newUsers.findIndex(
                (user) => user._id === currentUser._id
            );
            newUsers[indexUser] = currentUser;
            setUsers(newUsers);
        }
    }, [currentUser]);

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

    function getUserById(userId) {
        return users.find((u) => u._id === userId);
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    return (
        <UserContext.Provider value={{ users, isLoading, getUserById }}>
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
