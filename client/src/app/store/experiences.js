import { createSlice } from "@reduxjs/toolkit";
import experienceService from "../services/experience.service";
import { isOutdated } from "../utils/isOutdated";

const experiencesSlice = createSlice({
    name: "experiences",
    initialState: {
        entities: [],
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        experiencesRequested(state) {
            state.isLoading = true;
        },
        experiencesReceived(state, action) {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        experiencesRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: experiencesReducer } = experiencesSlice;
const { experiencesRequested, experiencesReceived, experiencesRequestFailed } =
    actions;

export const loadExperiencesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().experiences;
    if (isOutdated(lastFetch)) {
        dispatch(experiencesRequested());
        try {
            const { content } = await experienceService.fetchAll();
            dispatch(experiencesReceived(content));
        } catch (error) {
            dispatch(experiencesRequestFailed(error.message));
        }
    }
};

export const getExperiences = () => (state) => state.experiences.entities;
export const getExperiencesLoadingStatus = () => (state) =>
    state.experiences.isLoading;

export const getExperienceById = (expId) => (state) => {
    if (state.experiences.entities) {
        return state.experiences.entities.find((exp) => exp._id === expId);
    }
};

export default experiencesReducer;
