class TasksService {

  _apiBase = 'https://uxcandy.com/~shapoval/test-task-backend/v2';

  async getResource(url) {
    const res = await fetch(`${ this._apiBase }${ url }`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
    }
    return await res.json();
  }

  async taskResource(url, body, method) {
    const res = await fetch(`${ this._apiBase }${ url }`, {
      method: method,
      headers: {
        // 'Content-Type': 'multipart/form-data'
        mimeType: "multipart/form-data",
        contentType: false,
        processData: false,
      },
      body
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
    }
    return await res.json()
  }

  async getAllTasks() {
    return await this.getResource('?developer=Natashka');
  }

  async createTask(username, email, text) {
    const bodyItem = JSON.stringify({"username": `${ username }`, "email": `${ email }`, "text": `${ text }`});
    const method = 'POST';
    return await this.taskResource('/create?developer=Natashka', bodyItem, method);
  }

}

const tasks = new TasksService();

export default tasks;