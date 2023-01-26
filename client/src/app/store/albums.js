import { createSlice } from "@reduxjs/toolkit";
import albumService from "../services/album.service";
import { isOutdated } from "../utils/isOutdated";

const albumsSlice = createSlice({
    name: "albums",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        albumsRequested(state) {
            state.isLoading = true;
        },
        albumsReceived(state, action) {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        albumsRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { actions, reducer: albumsReducer } = albumsSlice;
const { albumsRequested, albumsReceived, albumsRequestFailed } = actions;

export const loadAlbumsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().albums;
    if (isOutdated(lastFetch)) {
        dispatch(albumsRequested());
        try {
            const { content } = await albumService.fetchAll();
            dispatch(albumsReceived(content));
        } catch (error) {
            dispatch(albumsRequestFailed(error.message));
        }
    }
};

export const getAlbums = () => (state) => state.albums.entities;
export const getAlbumsLoadingStatus = () => (state) => state.albums.isLoading;

export const getAlbumIdByName = (name) => (state) => {
    return state.albums.entities
        ? state.albums.entities.find((album) => album.name === name)._id
        : null;
};

export default albumsReducer;
