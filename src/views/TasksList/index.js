import React from 'react';
import TasksList from "../../components/TasksList/TasksList";
import styles from './tasksList.module.scss'

function Tasks() {
  return (
      <div className={ styles.postsList }>
        {/*<AddTask/>*/}
        <TasksList/>
      </div>
  );
}

export default Tasks;