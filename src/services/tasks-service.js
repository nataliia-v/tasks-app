import axios, { post } from 'axios';

class TasksService {

  _apiBase = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';

  async getResource(url) {
    const res = await fetch(`${ this._apiBase }${ url }`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
    }
    return await res.json();
  }

  async taskResource(url, formData) {

    const config = {headers: {'content-type': `multipart/form-data`}};

    const res = axios.post(`${ this._apiBase }${ url }`, formData, config)
        .then(function (response) {
          console.log(response);
        })

        .catch(function (error) {
          console.log(error);
        });

    return await res.json()
  }

  async getAllTasks(perPage) {
    return await this.getResource(`?developer=Natashka&page=${ perPage }`);
  }

  async createTask(username, email, text) {

    const formData = new FormData();

    formData.set('email', `${ email }`);
    formData.set('text', `${ text }`);
    formData.set('username', `${ username }`);

    return await this.taskResource('create?developer=Natashka', formData);
  }


  async updateTask(id, text) {

    const formData = new FormData();
    const token = localStorage.token;

    formData.set('text', `${ text }`);
    formData.set('token', `${ token }`);
    console.log(formData);

    return await this.taskResource(`edit/${ id }?developer=Natashka`, formData);
  }

  // auth


  async userResource(url, formData) {
    const config = {headers: {'content-type': `multipart/form-data`}};

    try {
      const res = await axios.post(`${ this._apiBase }${ url }`, formData, config);

      localStorage.setItem("token", res.data.message.token);
      console.log(res);
      console.log(localStorage);
      // const token = localStorage.token;
      //
      // if (token !== "undefined") {
      //   console.log("token here")
      // } else {
      //   console.log("not token")
      // }

    } catch (error) {
      console.log(error);
    }
  }

  async userAuth({username, password}) {
    console.log(username);

    const formData = new FormData();

    formData.set('username', `${ username }`);
    formData.set('password', `${ password }`);

    return await this.userResource('login?developer=Natashka', formData)
  }


}

const tasks = new TasksService();

export default tasks;