import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveTask } from '../../state/tasks/thunks';
import { getIsSavingTask } from "../../state/tasks/selectors";
import { withRouter } from "react-router";
import { FormErrors } from "../FormErrors/FormErrors";

import styles from './addTask.module.scss'
import TextField from '@material-ui/core/TextField';
import { FormGroup } from "@material-ui/core";

class AddTask extends Component {

  state = {
    username: "",
    email: "",
    text: "",

    formErrors: {username: "", email: "", text: ""},
    usernameValid: false,
    emailValid: false,
    textValid: false,
    formValid: false,

    showPostCreation: false,
  };

  onChangeUsername = e => {

    this.setState({
      username: e.target.value
    });

  };

  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChangeBody = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const {dispatch} = this.props;
    const {username, email, text} = this.state;

    dispatch(
        saveTask({
          username,
          email,
          text
        })
    );

    this.setState({
      username: "",
      email: "",
      text: ""
    });
  };

  render() {

    return (
        <div>
          <div className={styles.btnAddPost}>

            <FormGroup className={ styles.modal }>
              <div>
                <form className={ styles.formAddPost } noValidate autoComplete="off" onSubmit={ this.handleSubmit }>

                  <TextField
                      id="outlined-name"
                      label="Username"
                      required
                      onChange={ this.onChangeUsername }
                      margin="normal"
                      variant="outlined"
                      value={this.state.username}
                  />
                  <TextField
                      id="standard-textarea"
                      label="email"
                      type="email"
                      placeholder="email"
                      multiline
                      onChange={ this.onChangeEmail }
                      margin="normal"
                      value={this.state.email}
                  />
                  <TextField
                      id="standard-textarea"
                      label="Enter the text here"
                      placeholder="text"
                      multiline
                      onChange={ this.onChangeBody }
                      margin="normal"
                      value={this.state.text}
                  />
                  <button onClick={ this.handleSubmit } className={ styles.btn }>add a task</button>
                </form>
              </div>
            </FormGroup>

          </div>

          <FormErrors formErrors={this.state.formErrors} />

        </div>
    );
  }
}

const mapStateToProps = state => ({
  isSaving: getIsSavingTask(state)
});

export default withRouter(connect(mapStateToProps)(AddTask));