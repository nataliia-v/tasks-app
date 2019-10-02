import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveTask } from '../../state/tasks/thunks';
import { getIsSavingTask } from "../../state/tasks/selectors";

import styles from './addTask.module.scss'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Modal from '@material-ui/core/Modal';

class AddTask extends Component {

  state = {
    username: "UserName",
    email: "ttttt@email.com",
    text: "Text text text",
    showPostCreation: false,
    isOpen: false,
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

    const {isOpen} = this.state;

    const handleOpen = () => {
      this.setState({
        isOpen: true
      });
    };

    const handleClose = () => {
      this.setState({
        isOpen: false
      });
    };

    return (
        <div>
          <div className={styles.btnAddPost}>
            <Button  onClick={ handleOpen } variant="outlined">
              Add a task
            </Button>
            <Modal className={ styles.modal }
                   aria-labelledby="simple-modal-title"
                   aria-describedby="simple-modal-description"
                   open={ isOpen }
                   onClose={ handleClose }
            >
              <div>
                <form className={ styles.formAddPost } noValidate autoComplete="off" onSubmit={ this.handleSubmit }>

                  <TextField
                      id="outlined-name"
                      label="Username"
                      required
                      onChange={ this.onChangeUsername }
                      margin="normal"
                      variant="outlined"
                  />
                  <TextField
                      id="standard-textarea"
                      label="email"
                      type="email"
                      placeholder="email"
                      multiline
                      onChange={ this.onChangeEmail }
                      margin="normal"
                  />
                  <TextField
                      id="standard-textarea"
                      label="Enter the text here"
                      placeholder="text"
                      multiline
                      onChange={ this.onChangeBody }
                      margin="normal"
                  />
                  <button onClick={ this.handleSubmit } className={ styles.btn }>add a task</button>
                </form>
              </div>
            </Modal>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isSaving: getIsSavingTask(state)
});

export default connect(mapStateToProps)(AddTask);