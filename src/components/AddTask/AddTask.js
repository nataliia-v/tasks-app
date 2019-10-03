import React, { Component } from 'react';
import { connect } from "react-redux";
import { saveTask } from '../../state/tasks/thunks';
import { getIsSavingTask } from "../../state/tasks/selectors";
import { withRouter } from "react-router";
// import { FormErrors } from "../FormErrors/FormErrors";

import TextField from '@material-ui/core/TextField';
import { FormGroup } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import './addTask.css'

class AddTask extends Component {

  state = {
    username: "",
    email: "",
    text: "",

    // formErrors: "error email",
    usernameValid: false,
    emailValid: false,
    textValid: false,
    formValid: false,

    showPostCreation: false,
  };

  useStyles = makeStyles({
    blue: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      // border: 0,
      // borderRadius: 3,
      // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'blue',
    },
    red : {
      color: 'red',
    }
  });


  onChangeUsername = e => {
    console.log(e.target.value);
    let event = e.target.value;
    console.log(event.length);
    // let result = event < 2 ? this.state.usernameValid === false :
    if (event.length < 2) {

      this.setState({
        usernameValid: false
      });
      console.log("bad name");
    } else {
      // console.log("true");
      this.setState({
        usernameValid: true
      });
    }

    this.setState({
      username: e.target.value
    });
  };

  onChangeEmail = e => {
    // let event = e.target.value;
    // console.log(event.length);
    // // let result = event < 2 ? this.state.usernameValid === false :
    // if (event.length < 2) {
    //   // console.log("false");
    //   this.setState({
    //     emailValid: false
    //   });
    // } else {
    //   // console.log("true");
    //   this.setState({
    //     emailValid: true
    //   });
    //
    //
    //
    // }

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
    const {username, email, text, usernameValid} = this.state;

    if (!usernameValid) {
      alert("bad username, try again (enter more than 1 symbol)");
      this.setState({
        username: ""
      });
    }else {
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

      alert("The task successfully added");

    }


  };

  render() {

    // const classes = this.useStyles();


    const style = this.state.usernameValid ? 'blue' : 'red';

    return (
        <div>
          <div className="btnAddPost">
            {/*className={styles.btnAddPost}*/ }

            <FormGroup className="modal">
              <div>
                <form className="formAddPost" noValidate autoComplete="off">

                  <TextField

                      label="Username"
                      required
                      onChange={ this.onChangeUsername }
                      variant="outlined"
                      value={ this.state.username }
                  />
                  <TextField
                      id="standard-textarea"
                      required
                      variant="outlined"
                      label="email"
                      type="email"
                      placeholder="email"
                      multiline
                      onChange={ this.onChangeEmail }
                      margin="normal"
                      value={ this.state.email }

                  />
                  <TextField
                      id="standard-textarea"
                      required
                      label="Enter the text here"
                      placeholder="text"
                      multiline
                      onChange={ this.onChangeBody }
                      margin="normal"
                      value={ this.state.text }
                  />
                  <button type="submit" onClick={ this.handleSubmit } className="btn">add a task</button>
                </form>
              </div>
            </FormGroup>
          </div>

        </div>
    );
  }
}

const mapStateToProps = state => ({
  isSaving: getIsSavingTask(state)
});

export default withRouter(connect(mapStateToProps)(AddTask));