import { createAction, createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import trackService from "../services/track.service";
// import _ from "lodash";

const tracksSlice = createSlice({
    name: "tracks",
    initialState: {
        entities: null,
        currentTrack: null,
        currentAlbum: null,
        isLoading: true,
        error: null,
        dataLoaded: false
    },
    reducers: {
        tracksRequested(state) {
            state.isLoading = true;
        },
        tracksReceived(state, action) {
            state.entities = action.payload;
            state.currentTrack = action.payload[0]._id;
            state.currentAlbum = action.payload[0].album;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        tracksRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        trackSetted(state, action) {
            state.currentAlbum = action.payload.albumId;
            state.currentTrack = action.payload.trackId;
        },
        newDataSetted(state, action) {
            const elementIndex = state.entities.findIndex(
                (el) => el._id === action.payload._id
            );
            state.entities[elementIndex] = action.payload;
        },
        trackRemoved(state, action) {
            state.entities = state.entities.filter(
                (el) => el._id !== action.payload
            );
        },
        trackNoteCreated(state, action) {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        }
    }
});

const { actions, reducer: tracksReducer } = tracksSlice;
const {
    tracksRequested,
    tracksReceived,
    tracksRequestFailed,
    trackSetted,
    newDataSetted,
    trackRemoved,
    trackNoteCreated
} = actions;

const trackSetRequested = createAction("tracks/trackSetRequested");
const trackSetFailed = createAction("tracks/trackSetFailed");
const trackSetNewDataRequested = createAction(
    "tracks/trackSetNewDataRequested"
);
const trackSetNewDataFailed = createAction("tracks/trackSetNewDataFailed");
const removeTrackRequested = createAction("tracks/removeTrackRequested");
const removeTrackFailed = createAction("tracks/removeTrackFailed");
const uploadTrackRequested = createAction("tracks/uploadTrackRequested");
const uploadTrackFailed = createAction("tracks/uploadTrackFailed");

export const loadTracksList = () => async (dispatch) => {
    dispatch(tracksRequested());
    try {
        const { content } = await trackService.fetchAll();
        dispatch(tracksReceived(content));
    } catch (error) {
        dispatch(tracksRequestFailed(error.message));
    }
};

export const uploadTrack =
    ({ formData, trackNote }) =>
    async (dispatch) => {
        dispatch(uploadTrackRequested);
        try {
            const { content } = await trackService.uploadTrack(formData);
            const track = { ...trackNote, link: content };
            console.log("track", track);
            const { content: contentNote } = await trackService.createNoteDB(
                track
            );
            dispatch(trackNoteCreated(contentNote));
        } catch (error) {
            dispatch(uploadTrackFailed(error.message));
        }
    };

export const setCurrentTrack = (trackId, albumId) => (dispatch) => {
    dispatch(trackSetRequested());
    try {
        dispatch(trackSetted({ trackId, albumId }));
    } catch (error) {
        dispatch(trackSetFailed(error.message));
    }
};

export const setNewData = (payload) => async (dispatch) => {
    dispatch(trackSetNewDataRequested());
    try {
        const { content } = await trackService.update(payload);
        dispatch(newDataSetted(content));
    } catch (error) {
        dispatch(trackSetNewDataFailed(error.message));
    }
};

export const removeTrack = (track) => async (dispatch) => {
    dispatch(removeTrackRequested());
    try {
        const { content } = await trackService.removeTrack(track._id);
        if (!content) dispatch(trackRemoved(track._id));
        const { content: contentRemoved } =
            await trackService.removeUploadTrack(track);
        console.log("contentRemoved", contentRemoved);
    } catch (error) {
        dispatch(removeTrackFailed(error.message));
    }
};

export const getTracks = () => (state) => state.tracks.entities;
export const getTracksLoadingStatus = () => (state) => state.tracks.isLoading;
export const getDataStatus = () => (state) => state.tracks.dataLoaded;

export const getTracksByAlbumId = (albumId) => (state) => {
    return state.tracks.entities
        ? state.tracks.entities.filter((item) => item.album === albumId)
        : null;
};

export const getTracksByUserId = (userId) => (state) => {
    if (state.tracks.entities) {
        return state.tracks.entities.filter((item) => item.userId === userId);
    }
};

export const getBookmarkTracks = (userId) => (state) => {
    if (state.tracks.entities) {
        const bookmarkTrack = state.tracks.entities.filter((item) => {
            const bookmarkId = item.bookmarkId;
            const isExistBookmark = bookmarkId.includes(userId);
            return isExistBookmark ? item : null;
        });

        return bookmarkTrack;
    }
};

export const getOfferTracks = (userId) => (state) => {
    if (state.tracks.entities) {
        const offerTrack = state.tracks.entities.filter((item) => {
            return item.offer.find((item) => item.userId === userId);
        });
        return offerTrack;
    }
};

export const getCurrentAlbumId = () => (state) => {
    return state.tracks.currentAlbum;
};

export const getCurrentTrackId = () => (state) => state.tracks.currentTrack;

export const getCurrentTrack = () => (state) => {
    if (state.tracks.entities && state.tracks.currentTrack) {
        return state.tracks.entities.find(
            (item) => item._id === state.tracks.currentTrack
        );
    }
};

export const getTrackByZeroIndex = () => (state) => state.tracks?.entities[0];

export const getNextTrackId = (trackId) => (state) => {
    if (state.tracks.entities && state.tracks.currentAlbum !== null) {
        const albumTracks = state.tracks.entities.filter(
            (item) => item.album === state.tracks.currentAlbum
        );

        const currentTrackIndex = albumTracks.findIndex(
            (item) => item._id === trackId
        );

        const nextTrack =
            currentTrackIndex < albumTracks.length - 1
                ? albumTracks[currentTrackIndex + 1]
                : albumTracks[0];

        return nextTrack._id;
    } else {
        const currentTrackIndex = state.tracks.entities.findIndex(
            (item) => item._id === trackId
        );
        const nextTrack =
            currentTrackIndex < state.tracks.entities.length - 1
                ? state.tracks.entities[currentTrackIndex + 1]
                : state.tracks.entities[0];

        return nextTrack._id;
    }
};

export const getPrevTrackId = (trackId) => (state) => {
    if (trackId === state.tracks.entities[0]._id) {
        return state.tracks.entities[0]._id;
    }
    if (state.tracks.entities && state.tracks.currentAlbum !== null) {
        const albumTracks = state.tracks.entities.filter(
            (item) => item.album === state.tracks.currentAlbum
        );
        const currentTrackIndex = albumTracks.findIndex(
            (item) => item._id === trackId
        );
        const prevTrack =
            currentTrackIndex < albumTracks.length - 1 &&
            currentTrackIndex !== 0
                ? albumTracks[currentTrackIndex - 1]
                : albumTracks[0];

        return prevTrack._id;
    } else {
        const currentTrackIndex = state.tracks.entities.findIndex(
            (item) => item._id === trackId
        );
        const prevTrack = state.tracks.entities[currentTrackIndex - 1];

        return prevTrack._id;
    }
};

export default tracksReducer;
