import axios, { post } from 'axios';

class TasksService {

  _apiBase = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

  async getResource(url) {
    const res = await fetch(`${ this._apiBase }${ url }`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
    }
    return await res.json();
  }

  // async taskResource(url, body, method) {
  //   const res = await fetch(`${ this._apiBase }${ url }`, {
  //     method: method,
  //     mimeType: "multipart/form-data",
  //
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'false',
  //       // contentType: false
  //       // processData: false,
  //     },
  //     data: body
  //   });
  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
  //   }
  //   // return await res.json()
  //   console.log(res.json())
  // }

  async taskResource(url, username, email, text) {
    const formData = new FormData();

    formData.set('email', `${email}`);
    formData.set('text', `${text}`);
    formData.set('username', `${username}`);


    const config = { headers: { 'content-type': `multipart/form-data` } };

    const res = axios.post(`${ this._apiBase }${ url }`, formData, config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    return await res.json()
  }

  async getAllTasks() {
    return await this.getResource('?developer=Natashka');
  }

  async createTask(username, email, text) {
    return await this.taskResource('/create?developer=Natashka', username, email, text);
  }




}

const tasks = new TasksService();

export default tasks;