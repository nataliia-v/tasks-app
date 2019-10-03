import TasksLists from '../views/TasksList';

import { mapRoutes } from "../utils/helpers";
import AddTask from "../components/AddTask/AddTask";
import Login from "../components/Auth/Auth";

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
  },
  authPage: {
    component: Login,
    path: "/login",
    exact: true
  }

});