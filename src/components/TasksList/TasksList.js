import React, { useEffect, useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  getTasksError,
  getTasksIsLoading,
  getTasksItems,
  getTotalTasksCount
} from "../../state/tasks/selectors";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import { fetchTasks, updateTaskThunk } from "../../state/tasks/thunks";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import styles from './tasksList.module.scss'


const useStyles = makeStyles(() => ({
  card: {
    maxWidth: 700,
    marginBottom: 10,
    margin: 'auto',
  },
}));

const TasksList = ({tasks, onUpdate, currentPage}) => {
  const classes = useStyles();

  return (
      <div>
        <ul>
          {
            tasks.map((task) => (
              <Card className={ classes.card } key={ task.id }>
                <TaskItem task={ task } onUpdate={ onUpdate } currentPage={ currentPage }/>
              </Card>
            ))
          }
        </ul>

      </div>
  );
};

function TasksListContainer({tasks, totalTasksCount, loading, error, dispatch, pageLength = 3}) {
  const pageCount = Math.ceil(totalTasksCount / pageLength);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = data => setCurrentPage(data.selected + 1);

  useEffect(() => {
    dispatch(fetchTasks(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const updateTask = (data) => {
    dispatch(updateTaskThunk(data));
  };

  if (error) {
    return <ErrorIndicator/>
  }

  return (
      <>
        <Link to={ '/create' }>
          <Button>
            Add a task
          </Button>
        </Link>

        <ReactPaginate
            previousLabel={ <button>previous</button> }
            nextLabel={ <button>next</button> }
            breakLabel={ '...' }
            breakClassName={ 'break-me' }
            pageCount={ pageCount }
            marginPagesDisplayed={ 2 }
            pageRangeDisplayed={ 3 }
            onPageChange={ handlePageClick }
            containerClassName={ 'pagination' }
            subContainerClassName={ 'pages pagination' }
            activeClassName={ styles.selectedPage }
        />


        { loading
            ? <Spinner/>
            : <TasksList
                tasks={ tasks }
                currentPage={ currentPage }
                onPageClick={ handlePageClick }
                onUpdate={ updateTask }
            /> }
      </>

  );

}

const mapStateToProps = state => ({
  tasks: getTasksItems(state),
  totalTasksCount: getTotalTasksCount(state),
  loading: getTasksIsLoading(state),
  error: getTasksError(state),
});

export default withRouter(connect(mapStateToProps)(TasksListContainer));