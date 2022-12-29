import { createSlice } from "@reduxjs/toolkit";
import workformatService from "../services/format.service";

const workformatsSlice = createSlice({
    name: "workformats",
    initialState: { entities: null, isLoading: true, error: null },
    reducers: {
        workformatsRequested(state) {
            state.isLoading = true;
        },
        workformatsRecieved(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        workformatsRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: workformatsReducer } = workformatsSlice;
const { workformatsRequested, workformatsRecieved, workformatsRequestFailed } =
    actions;

export const loadWorkformatsList = () => async (dispatch) => {
    dispatch(workformatsRequested());
    try {
        const { content } = await workformatService.fetchAll();
        dispatch(workformatsRecieved(content));
    } catch (error) {
        dispatch(workformatsRequestFailed(error.message));
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
