import tasksService from "../../../services/tasks-service";

import * as actions from '../actions';

export const fetchTasks = () => {

  return async dispatch => {
    dispatch(actions.startTasksFetching());

    try {
      const data = await tasksService.getAllTasks();

      dispatch(actions.fetchTasksSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(actions.fetchTasksFailed(error));
    } finally {
      dispatch(actions.stopTasksFetching());
    }
  }
};

export const saveTask = ({ username, email, text }) => {

  return async dispatch => {
    dispatch(actions.startTaskSaving());

    try {
      const data = await tasksService.createTask(username, email, text);
      dispatch(actions.saveTaskSuccess(data));
    } catch (error) {
      dispatch(actions.saveTaskFailed(error));
    } finally {
      dispatch(actions.stopTaskSaving());
    }
  };
};
