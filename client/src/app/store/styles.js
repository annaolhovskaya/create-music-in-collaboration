import { createSlice } from "@reduxjs/toolkit";
import styleService from "../services/style.service";
import { isOutdated } from "../utils/isOutdated";

const stylesSlice = createSlice({
    name: "styles",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        stylesRequested(state) {
            state.isLoading = true;
        },
        stylesReceived(state, action) {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        stylesRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: stylesReducer } = stylesSlice;
const { stylesRequested, stylesReceived, stylesRequestFailed } = actions;

export const loadStylesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().styles;
    if (isOutdated(lastFetch)) {
        dispatch(stylesRequested());
        try {
            const { content } = await styleService.fetchAll();
            dispatch(stylesReceived(content));
        } catch (error) {
            dispatch(stylesRequestFailed(error.message));
        }
    }
};

export const getStyles = () => (state) => state.styles.entities;
export const getStylesLoadingStatus = () => (state) => state.styles.isLoading;

export const getStylesByIds = (stylesIds) => (state) => {
    if (state.styles.entities) {
        const stylesArray = [];
        for (const styleId of stylesIds) {
            for (const style of state.styles.entities) {
                if (style._id === styleId) {
                    stylesArray.push(style);
                    break;
                }
            }
        }
        return stylesArray;
    }
    return [];
};

export default stylesReducer;
