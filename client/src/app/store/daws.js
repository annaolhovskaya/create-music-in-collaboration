import { createSlice } from "@reduxjs/toolkit";
import dawService from "../services/daw.services";
import { isOutdated } from "../utils/isOutdated";

const dawsSlice = createSlice({
    name: "daws",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        dawsRequested(state) {
            state.isLoading = true;
        },
        dawsReceived(state, action) {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        dawsRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: dawsReducer } = dawsSlice;
const { dawsRequested, dawsReceived, dawsRequestFailed } = actions;

export const loadDawsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().daws;
    if (isOutdated(lastFetch)) {
        dispatch(dawsRequested());
        try {
            const { content } = await dawService.fetchAll();
            dispatch(dawsReceived(content));
        } catch (error) {
            dispatch(dawsRequestFailed(error.message));
        }
    }
};

export const getDaws = () => (state) => state.daws.entities;
export const getDawsLoadingStatus = () => (state) => state.daws.isLoading;

export const getDawsByIds = (dawsIds) => (state) => {
    if (state.daws.entities) {
        const dawsArray = [];
        for (const dawId of dawsIds) {
            for (const daw of state.daws.entities) {
                if (daw._id === dawId) {
                    dawsArray.push(daw);
                    break;
                }
            }
        }
        return dawsArray;
    }
    return [];
};

export default dawsReducer;
