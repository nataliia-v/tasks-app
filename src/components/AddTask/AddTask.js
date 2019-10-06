import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import TextField from '@material-ui/core/TextField';
import { FormGroup } from "@material-ui/core";

import { saveTask } from '../../state/tasks/thunks';
import { getIsSavingTask } from "../../state/tasks/selectors";

import './addTask.css'

class AddTask extends Component {

  state = {
    username: "",
    email: "",
    text: "",

    // formErrors: "error email",
    usernameIsValid: false,
    emailIsValid: false,
    textIsValid: false,
    formValid: false,
    showPostCreation: false,
    submit: false
  };


  onChangeUsername = e => {
    const event = e.target.value;
    if (event.length < 2 || event === "") {

      this.setState({
        usernameIsValid: false
      });

    } else {
      // console.log("true");
      this.setState({
        usernameIsValid: true
      });
    }

    this.setState({
      username: e.target.value
    });
  };

  onChangeEmail = e => {
    const event = e.target.value;

    const emailValid = event.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    if (!emailValid || event === "") {
      this.setState({
        emailIsValid: false
      })
    }  else {
      this.setState({
        emailIsValid: true
      });
    }

    this.setState({
      email: e.target.value
    });

  };

  onChangeText = e => {
    const event = e.target.value;

    if (event.length < 2 || event === "") {

      this.setState({
        textIsValid: false
      });

    } else {
      // console.log("true");
      this.setState({
        textIsValid: true
      });
    }

    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const {dispatch} = this.props;
    const {username, email, text, emailIsValid, usernameIsValid, textIsValid} = this.state;

    if (!emailIsValid) {
      this.setState({
        submit: true
      });

      this.setState({
        email: ""
      });
    } else if (!usernameIsValid) {
      this.setState({
        submit: true
      });

      this.setState({
        username: ""
      });
    }
    else if (!textIsValid) {
      this.setState({
        submit: true
      });

      this.setState({
        text: ""
      });
    }
    else {
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

    }


  };


  render() {

    const { emailIsValid, usernameIsValid, textIsValid, submit } = this.state;

    /**
     * @return {null}
     */
    function IsNotValidEmail()
    {
      if(!submit)
        return null;
      else
        return <span>Email is not valid</span>;
    }

    /**
     * @return {null}
     */
    function IsNotValidUsername()
    {
      if(!submit)
        return null;
      else
        return <span>Name too short</span>;
    }

    /**
     * @return {null}
     */
    function IsNotValidText()
    {
      if(!submit)
        return null;
      else
        return <span>Please, enter more than 2 letters</span>;
    }

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

                  {!usernameIsValid &&
                  <IsNotValidUsername toDisplay = {true} />
                  }
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

                  {!emailIsValid &&
                    <IsNotValidEmail toDisplay = {true} />
                  }

                  <TextField
                      id="standard-textarea"
                      required
                      label="Enter the text here"
                      placeholder="text"
                      multiline
                      onChange={ this.onChangeText }
                      margin="normal"
                      value={ this.state.text }
                  />

                  {!textIsValid &&
                  <IsNotValidText toDisplay = {true} />
                  }

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