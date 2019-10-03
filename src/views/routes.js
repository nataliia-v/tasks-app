import TasksLists from '../views/TasksList';

import { mapRoutes } from "../utils/helpers";
import AddTask from "../components/AddTask/AddTask";

export default mapRoutes({
  tasksList: {
    component: TasksLists,
    path: "/",
    exact: true
  },
  createTask: {
    component: AddTask,
    path: "/create",
    exact: true
  }
  // adminPage: {
  //   component: AdminPage,
  //   path: "/tasks/:admin",
  //   exact: true
  // }
});