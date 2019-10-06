import tasksService from "../../../services/TasksService";

import * as actions from '../actions';
import { toastrActions } from "../../toastr/actions";

export const fetchTasks = (currentPage) => {

  return async dispatch => {
    dispatch(actions.startTasksFetching());

    try {
      const data = await tasksService.getAllTasks(currentPage);
      dispatch(actions.fetchTasksSuccess(data));
    } catch (error) {
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

      dispatch(actions.saveTaskSuccess(data.data.message));
      dispatch(toastrActions.openToastr({ message: 'Task has been successfully saved.' }))

    } catch (error) {
      dispatch(actions.saveTaskFailed(error));
      dispatch(toastrActions.openToastr({ message: 'Error saving task!!' }));
    } finally {
      dispatch(actions.stopTaskSaving());
    }
  };
};

export const updateTaskThunk = ({ id, currentPage, ...rest }) => {

  return async dispatch => {
    dispatch(actions.startTaskSaving());

    try {
      const data = await tasksService.updateTask(id, rest);
      console.log('updated task', data);
      dispatch(fetchTasks(currentPage));

      dispatch(actions.updateTaskSuccess(data));
    } catch (error) {
      dispatch(actions.saveTaskFailed(error));
    } finally {
      dispatch(actions.stopTaskSaving());
    }
  }

};
