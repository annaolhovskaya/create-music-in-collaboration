import { createSlice } from "@reduxjs/toolkit";
import workformatService from "../services/format.service";
import { isOutdated } from "../utils/isOutdated";

const workformatsSlice = createSlice({
    name: "workformats",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        workformatsRequested(state) {
            state.isLoading = true;
        },
        workformatsReceived(state, action) {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        workformatsRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: workformatsReducer } = workformatsSlice;
const { workformatsRequested, workformatsReceived, workformatsRequestFailed } =
    actions;

export const loadWorkformatsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().workformats;
    if (isOutdated(lastFetch)) {
        dispatch(workformatsRequested());
        try {
            const { content } = await workformatService.fetchAll();
            dispatch(workformatsReceived(content));
        } catch (error) {
            dispatch(workformatsRequestFailed(error.message));
        }
    }
};

export const getWorkformats = () => (state) => state.workformats.entities;
export const getWorkformatsLoadingStatus = () => (state) =>
    state.workformats.isLoading;

export const getWorkformatsByIds = (workformatsIds) => (state) => {
    if (state.workformats.entities) {
        const workformatsArray = [];
        for (const formatId of workformatsIds) {
            for (const workformat of state.workformats.entities) {
                if (workformat._id === formatId) {
                    workformatsArray.push(workformat);
                    break;
                }
            }
        }
        return workformatsArray;
    }
    return [];
};

export default workformatsReducer;
