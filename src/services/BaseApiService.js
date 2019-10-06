import axios from "axios";

class BaseApiService {

  _apiBase = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';

  async postResource(url, formData) {
    const config = {headers: {'content-type': `multipart/form-data`}};

    const response = await axios.post(`${ this._apiBase }${ url }`, formData, config);

    if (response.data.status !== 'ok') {
      throw new Error(JSON.stringify(response));
    }

    return response;
  }

  async getResource(url) {
    const res = await fetch(`${ this._apiBase }${ url }`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`)
    }
    return await res.json();
  }

}

export default BaseApiService;