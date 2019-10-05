import tasksService from "../../../services/tasks-service";

import * as actions from '../actions';
import { toastrActions } from "../../toastr/actions";

export const fetchTasks = (currentPage) => {

  return async dispatch => {
    dispatch(actions.startTasksFetching());

    try {
      const data = await tasksService.getAllTasks(currentPage);
      console.log(data);
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
      console.log('error', error);
      dispatch(actions.saveTaskFailed(error));
      dispatch(toastrActions.openToastr({ message: 'Error saving task!!' }));
    } finally {
      dispatch(actions.stopTaskSaving());
    }
  };
};

export const updateTaskThunk = ({id, text, currentPage}) => {

  return async dispatch => {
    dispatch(actions.startTaskSaving());

    try {
      const data = await tasksService.updateTask(id, text);
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

export const doneTaskThunk = ({id, status, currentPage}) => {

  return async dispatch => {
    dispatch(actions.startTaskSaving());

    try {
      const data = await tasksService.doneTask(id, status);
      dispatch(fetchTasks(currentPage));

      dispatch(actions.updateTaskSuccess(data));
    } catch (error) {
      dispatch(actions.saveTaskFailed(error));
    } finally {
      dispatch(actions.stopTaskSaving());
    }
  }

};

