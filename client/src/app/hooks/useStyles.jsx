import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import styleService from "../services/style.service";
import PropTypes from "prop-types";

const StyleContext = React.createContext();

export const useStyles = () => {
    return useContext(StyleContext);
};

export const StyleProvider = ({ children }) => {
    const [styles, setStyles] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getStylesList();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    async function getStylesList() {
        try {
            const { content } = await styleService.get();
            setStyles(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function getStyle(id) {
        return styles.find((s) => s._id === id);
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    return (
        <StyleContext.Provider value={{ styles, isLoading, getStyle }}>
            {children}
        </StyleContext.Provider>
    );
};

StyleProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
