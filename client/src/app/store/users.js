import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import userService from "../services/user.service";
import { generateAuthError } from "../utils/generateAuthError";
import history from "../utils/history";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      };

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersRequested(state) {
            state.isLoading = true;
        },
        usersReceived(state, action) {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        authRequested(state) {
            state.error = null;
        },
        usersRequestFailed(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequestSuccess(state, action) {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed(state, action) {
            state.error = action.payload;
        },
        userCreated(state, action) {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        userUpdateSuccess(state, action) {
            const elementIndex = state.entities.findIndex(
                (el) => el._id === action.payload._id
            );
            state.entities[elementIndex] = action.payload;
        },
        userLoggedOut(state) {
            state.entities = null;
            state.auth = null;
            state.isLoggedIn = false;
            state.dataLoaded = false;
        }
    }
});

const { actions, reducer: usersReducer } = usersSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequested,
    authRequestSuccess,
    authRequestFailed,
    userCreated,
    userUpdateSuccess,
    userLoggedOut
} = actions;

const userCreateRequested = createAction("users/userCreateRequested");
const userCreateFailed = createAction("users/userCreateFailed");
const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.get();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

export const logIn =
    ({ payload, redirect }) =>
    async (dispatch) => {
        dispatch(authRequested());
        const { email, password } = payload;
        try {
            const data = await authService.login({ email, password });
            dispatch(authRequestSuccess({ userId: data.localId }));
            localStorageService.setTokens(data);
            history.push(redirect);
        } catch (error) {
            const { code, message } = error.response.data.error;
            if (code === 400) {
                const errorMessage = generateAuthError(message);
                dispatch(authRequestFailed(errorMessage));
            } else {
                dispatch(authRequestFailed(error.message));
            }
        }
    };

export const signUp =
    ({ email, password, ...rest }) =>
    async (dispatch) => {
        dispatch(authRequested());
        try {
            const data = await authService.register({ email, password });
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.localId }));
            dispatch(
                createUser({
                    _id: data.localId,
                    email,
                    avatar: `https://avatars.dicebear.com/api/avataaars/${(
                        Math.random() + 1
                    )
                        .toString(36)
                        .substring(7)}.svg`,
                    ...rest
                })
            );
        } catch (error) {
            dispatch(authRequestFailed(error.message));
        }
    };

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
    history.push("/");
};

function createUser(payload) {
    return async function (dispatch) {
        dispatch(userCreateRequested());
        try {
            const { content } = await userService.create(payload);
            dispatch(userCreated(content));
            history.push("/main");
        } catch (error) {
            dispatch(userCreateFailed(error.message));
        }
    };
}

export const updateUser = (payload) => async (dispatch) => {
    dispatch(userUpdateRequested());
    try {
        const { content } = await userService.update(payload);
        dispatch(userUpdateSuccess(content));
        history.push(`/users/${content._id}`);
    } catch (error) {
        dispatch(userUpdateFailed(error.message));
    }
};

export const getUsers = () => (state) => state.users?.entities;

export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((user) => user._id === userId);
    }
};

export const getUsersLoadingStatus = () => (state) => state.users.isLoading;

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;

export const getDataStatus = () => (state) => state.users.dataLoaded;

export const getCurrentUserData = () => (state) => {
    return state.users.entities
        ? state.users.entities.find((u) => u._id === state.users.auth.userId)
        : null;
};

export const getCurrentUserId = () => (state) => {
    if (state.users.auth) {
        return state.users.auth.userId;
    }
};

export const getAuthErrors = () => (state) => state.users.error;

export default usersReducer;
