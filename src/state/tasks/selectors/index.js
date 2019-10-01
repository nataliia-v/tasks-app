import { createSelector } from 'reselect';

const getTasksModuleState = state => state.tasks;

export const getAllTasks = createSelector(
    getTasksModuleState,
    tasksState => tasksState.data
);

export const getTasksIsLoading = createSelector(
    getTasksModuleState,
    tasksState => tasksState.loading
);

export const getTasksError = createSelector(
    getTasksModuleState,
    tasksState => tasksState.error
);

export const getIsSavingTask = createSelector(
    getTasksModuleState,
    tasksState => tasksState.isSaving
);