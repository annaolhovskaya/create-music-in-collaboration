import { createSlice } from "@reduxjs/toolkit";
import dawService from "../services/daw.services";

const dawsSlice = createSlice({
    name: "daws",
    initialState: { entities: null, isLoading: true, error: null },
    reducers: {
        dawsRequested(state) {
            state.isLoading = true;
        },
        dawsRecieved(state, action) {
            state.entities = action.payload;
            state.isLoading = false;
        },
        dawsRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: dawsReducer } = dawsSlice;
const { dawsRequested, dawsRecieved, dawsRequestFailed } = actions;

export const loadDawsList = () => async (dispatch) => {
    dispatch(dawsRequested());
    try {
        const { content } = await dawService.fetchAll();
        dispatch(dawsRecieved(content));
    } catch (error) {
        dispatch(dawsRequestFailed(error.message));
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
