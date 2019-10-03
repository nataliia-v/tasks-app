/*
* Fetch tasks
* */
export const startTasksFetching = () => ({
  type: 'START_TASKS_FETCHING',
});

export const stopTasksFetching = () => ({
  type: 'STOP_TASKS_FETCHING',
});

export const fetchTasksSuccess = newTasks => ({
  type: 'FETCH_TASKS_SUCCESS',
  payload: newTasks
});

export const fetchTasksFailed = error => ({
  type: 'FETCH_TASKS_FAILED',
  payload: error
});

/*
 * ---------------
 * Save task
 * ---------------
 * */
export const startTaskSaving = () => ({
  type: "START_TASK_SAVING"
});
export const stopTaskSaving = () => ({
  type: "STOP_TASK_SAVING"
});
export const saveTaskSuccess = task => ({
  type: "SAVE_TASK_SUCCESS",
  payload: task
});
export const saveTaskFailed = error => ({
  type: "SAVE_TASK_FAILED",
  payload: error
});
export const updateTaskSuccess = task => ({
  type: 'UPDATE_TASK_SUCCESS',
  payload: task,
});