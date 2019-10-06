import BaseApiService from "./BaseApiService";
import { createFormData } from "../utils/helpers";

class TasksService extends BaseApiService {

  async getAllTasks(currentPage) {
    return await this.getResource(`?developer=Natashka&page=${ currentPage }`);
  }

  async createTask(username, email, text) {

    const formData = new FormData();

    formData.set('email', `${ email }`);
    formData.set('text', `${ text }`);
    formData.set('username', `${ username }`);

    return await this.postResource('create?developer=Natashka', formData);
  }

  async updateTask(id, payload) {

    const token = localStorage.token;

    const formData = createFormData({ token, ...payload });

    return await this.postResource(`edit/${ id }?developer=Natashka`, formData);
  }
}

const tasksService = new TasksService();

export default tasksService;