import { combineReducers, configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./albums";
import commentsReducer from "./comments";
import dawsReducer from "./daws";
import experiencesReducer from "./experiences";
import stylesReducer from "./styles";
import tracksReducer from "./tracks";
import usersReducer from "./users";
import workformatsReducer from "./workformats";

const rootReducer = combineReducers({
    users: usersReducer,
    experiences: experiencesReducer,
    daws: dawsReducer,
    styles: stylesReducer,
    workformats: workformatsReducer,
    tracks: tracksReducer,
    albums: albumsReducer,
    comments: commentsReducer
});

function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}

export default createStore;
