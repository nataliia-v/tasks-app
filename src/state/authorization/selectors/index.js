import { createSelector } from 'reselect';

const getUserModuleState = state => state.auth;

export const getUserIsLoggedIn = createSelector(
    getUserModuleState,
    state => state.isLoggedIn,
)

export const getUserIsLoading = createSelector(
    getUserModuleState,
    authState => authState.loading
);

export const getUserError = createSelector(
    getUserModuleState,
    authState => authState.error
);