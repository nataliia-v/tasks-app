import TasksLists from '../views/TasksList';

import { mapRoutes } from "../utils/helpers";

export default mapRoutes({
  tasksList: {
    component: TasksLists,
    path: "/tasks",
    exact: true
  },
  adminPage: {
    component: AdminPage,
    path: "/tasks/:admin",
    exact: true
  }
});