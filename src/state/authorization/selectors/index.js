import { createSelector } from 'reselect';

const getUserModuleState = state => state.autho;

export const getUserIsLoading = createSelector(
    getUserModuleState,
    authState => authState.loading
);

export const getUserError = createSelector(
    getUserModuleState,
    authState => authState.error
);

export const getIsSavingUser = createSelector(
    getUserModuleState,
    authState => authState.isSaving
);