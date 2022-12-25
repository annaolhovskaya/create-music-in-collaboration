import React, { useContext, useState, useEffect } from "react";
import experienceService from "../services/experience.service";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const ExperienceContext = React.createContext();

export const useExperience = () => {
    return useContext(ExperienceContext);
};

export const ExperienceProvider = ({ children }) => {
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getExperienceList();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast.error(error);
            setError(null);
        }
    }, [error]);

    async function getExperienceList() {
        try {
            const { content } = await experienceService.get();
            setExperiences(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function getExperience(id) {
        return experiences.find((exp) => exp._id === id);
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    return (
        <ExperienceContext.Provider
            value={{ experiences, isLoading, getExperience }}
        >
            {children}
        </ExperienceContext.Provider>
    );
};

ExperienceProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
