import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import formatService from "../services/format.service";
import PropTypes from "prop-types";

const WorkFormatContext = React.createContext();

export const useWorkFormats = () => {
    return useContext(WorkFormatContext);
};

export const WorkFormatProvider = ({ children }) => {
    const [formats, setFormats] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getFormatsList();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    async function getFormatsList() {
        try {
            const { content } = await formatService.get();
            setFormats(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function getFormat(id) {
        return formats.find((f) => f._id === id);
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    return (
        <WorkFormatContext.Provider value={{ formats, isLoading, getFormat }}>
            {children}
        </WorkFormatContext.Provider>
    );
};

WorkFormatProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
