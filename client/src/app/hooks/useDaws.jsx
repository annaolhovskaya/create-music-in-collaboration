import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import dawService from "../services/daw.services";
import PropTypes from "prop-types";

const UserContext = React.createContext();

export const useDaws = () => {
    return useContext(UserContext);
};

export const DawProvider = ({ children }) => {
    const [daws, setDaws] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
        getDawsList();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            seterror(null);
        }
    }, [error]);

    async function getDawsList() {
        try {
            const { content } = await dawService.get();
            setDaws(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function getDaw(id) {
        return daws.find((d) => d._id === id);
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        seterror(message);
    }
    return (
        <UserContext.Provider value={{ daws, isLoading, getDaw }}>
            {children}
        </UserContext.Provider>
    );
};

DawProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
