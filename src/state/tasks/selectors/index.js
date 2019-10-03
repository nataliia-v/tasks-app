import { createSelector } from 'reselect';
import { get } from 'lodash';

const getTasksModuleState = state => state.tasks;

export const getTasksData = createSelector(
    getTasksModuleState,
    tasksState => tasksState.data
);

export const getTasksItems = createSelector(
    getTasksData,
    data => get(data, 'message.tasks', []),
);

export const getTotalTasksCount = createSelector(
    getTasksData,
    data => get(data, 'message.total_task_count', 0),
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