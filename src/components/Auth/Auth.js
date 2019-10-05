import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {userLoginFetch} from '../redux/actions';
import tasksService from "../../services/tasks-service";
import { Route, Redirect } from "react-router";

class Login extends Component {
  state = {
    username: "",
    password: "",
    authSuccess: false,
    textMessage: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    tasksService.userAuth(this.state).then();

    console.log(localStorage.token);

    if (localStorage.token === ""){
      this.setState({
        textMessage: "Введенные данные не верные"
      });
    } else {
      this.setState({
        authSuccess: true
      });
      console.log(this.state.authSuccess);
    }
  };

  render() {
    const {authSuccess, textMessage} = this.state;

    return (

        <>


          { authSuccess
              ? (
                  <Redirect to="/" />
              ): (

                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>

                      <label>Username</label>
                      <input
                          name='username'
                          placeholder='Username'
                          value={this.state.username}
                          onChange={this.handleChange}
                      /><br/>

                      <label>Password</label>
                      <input
                          type='password'
                          name='password'
                          placeholder='Password'
                          value={this.state.password}
                          onChange={this.handleChange}
                      /><br/>

                      <input type='submit'/>
                    </form>

                    <p>{textMessage}</p>

                  </div>

              )

          }

          </>


    )
  }
}

const mapDispatchToProps = dispatch => ({
  // userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(Login);