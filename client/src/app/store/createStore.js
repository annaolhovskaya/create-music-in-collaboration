import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dawsReducer from "./daws";
import stylesReducer from "./styles";
import workformatsReducer from "./workformats";

const rootReducer = combineReducers({
    daws: dawsReducer,
    styles: stylesReducer,
    workformats: workformatsReducer
});

function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}

export default createStore;
