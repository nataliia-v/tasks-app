import React, { useEffect } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllTasks, getTasksError, getTasksIsLoading } from "../../state/tasks/selectors";

import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import { fetchTasks } from "../../state/tasks/thunks";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(() => ({

  card: {
    maxWidth: 700,
    marginBottom: 10,
    margin: 'auto',
  },

}));

const TasksList = ({ tasks }) => {

  const classes = useStyles();

  return (
      <ul>
        {
          tasks.map((task) => {
            return (
                <Card className={classes.card} key={task.id}>
                  <TaskItem task={task} />
                  {/*onDelete={onDelete} onUpdate={onUpdate}*/}
                </Card>
            )
          })
        }
      </ul>
  );
};

function TasksListContainer(props) {
  const {tasks, loading, error, dispatch} = props;

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  if (loading) {
    return <Spinner/>;
  }
  if (error) {
    return <ErrorIndicator/>
  }

  return <TasksList tasks={ tasks.message.tasks } />

  // onDelete={deleteTask} onUpdate={updateTask}

}

const mapStateToProps = state => ({
  tasks: getAllTasks(state),
  loading: getTasksIsLoading(state),
  error: getTasksError(state),
});

export default withRouter(connect(mapStateToProps)(TasksListContainer));