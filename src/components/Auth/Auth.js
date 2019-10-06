import React, {Component} from 'react';
import {connect} from 'react-redux';
import { login } from "../../state/authorization/thunks";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.dispatch(login({ username, password }));
  };

  render() {
    return (
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
        </div>
    )
  }
}

export default connect(null, null)(Login);