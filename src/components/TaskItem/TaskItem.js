import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from "react-router-dom";
import { getIsSavingTask } from "../../state/tasks/selectors";

import styles from './TaskItem.module.scss';
// import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from "@material-ui/core/CardActionArea";


// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//     fontSize: 10,
//   },
// }));

function TaskItem(props) {
  const {task, onUpdate} = props;

  const [isEditMode, setIsEditMode] = useState(false);
  const [taskText, setTaskText] = useState(task.text);

  const onChangeText = e => {
    const value = e.target.value;
    setTaskText(value);
  };

  const onEditTask = () => {
    setIsEditMode(true);
  };

  const onUpdateTask = () => {
    setIsEditMode(false);
    const data = {id: task.id,  text: taskText};

    onUpdate(data);
  };
  // const onChangeBodyComment = (e) => {
  //   const value = e.target.value;
  //   setCommentBody(value);
  //
  // };

  // const createComment = (event) => {
  //   event.preventDefault();
  //   onCreateComment(post.id, commentBody);
  // };

  // const classes = useStyles();

  const token = localStorage.token;

  // if (token !== "undefined") {
  //   console.log("token here")
  // } else {
  //   console.log("not token")
  // }
  return (
      <div>
        <CardActionArea>
          <CardContent>

                      <div>
                        <Typography gutterBottom variant="h5" component="h2">
                          { task.username }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          { task.email }
                        </Typography>

                        { isEditMode
                            ?
                            (
                                <p>
                                  <textarea className={ styles.bodyItem } value={ taskText } onChange={ onChangeText }/>
                                </p>
                            )
                            : (
                                <Typography variant="body2" color="textSecondary" component="p" value={ taskText } onChange={ onChangeText}>
                                  {  decodeURIComponent(task.text) }
                                </Typography>
                            )
                        }

                        <Typography variant="body2" color="textSecondary" component="p">
                          { task.status }
                        </Typography>
                      </div>


          </CardContent>
        </CardActionArea>
        {/*{ token !== "undefined" &*/}

        <CardActions className={ styles.flexBts }>
          <div>
        { isEditMode && <Button onClick={ onUpdateTask } variant="outlined">
          save task
          </Button> }

          <IconButton onClick={ onEditTask }  aria-label="delete">
          <EditIcon/>
          </IconButton>
          </div>

          </CardActions>

        {/*}*/}


      </div>
  );
}

const mapStateToProps = state => ({
  isSaving: getIsSavingTask(state),
});

export default connect(mapStateToProps)(TaskItem);