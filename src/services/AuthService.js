import BaseApiService from "./BaseApiService";

class AuthService extends BaseApiService {
  async login({username, password}) {
    const formData = new FormData();

    formData.set('username', `${ username }`);
    formData.set('password', `${ password }`);

    const response = await this.postResource('login?developer=Natashka', formData);

    if (response.data.status === "ok") {
      localStorage.setItem("token", response.data.message.token);
    } else {
      localStorage.removeItem("token");
    }

    return response;
  }
}

const authService = new AuthService();

export default authService;