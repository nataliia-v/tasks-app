import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getIsSavingTask } from "../../state/tasks/selectors";

import styles from './TaskItem.module.scss';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from "@material-ui/core/CardActionArea";

function TaskItem(props) {
  const {task, onUpdate, currentPage} = props;

  const [isEditMode, setIsEditMode] = useState(false);
  const [taskText, setTaskText] = useState(task.text);

  const onChangeText = e => {
    const value = e.target.value;
    setTaskText(value);
  };

  const onEditTask = () => {
    setIsEditMode(true);
  };

  const onDoneTask = () => {
    const data = {
      id: task.id,
      status: 10,
      currentPage
    };
    onUpdate(data);
  };

  const onUpdateTask = () => {
    setIsEditMode(false);
    const data = {
      id: task.id,
      text: `(changed by administrator) ${taskText}`,
      currentPage
    };

    onUpdate(data);
  };

  const status = task.status;
  const token = localStorage.token;
  const name = "Name: ";
  const email = "Email: ";
  const text = "Text: ";

  return (
      <div>
        <CardActionArea>
          <CardContent>

            <div>

              <Typography id="name" gutterBottom variant="h5" component="h2">
                { name }  { task.username }
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                { email }{ task.email }
              </Typography>

              { isEditMode
                  ? (
                      <p>
                        <textarea className={ styles.bodyItem }  value={ taskText } onChange={ onChangeText }/>
                      </p>
                  )
                  : (
                      <Typography type={text} variant="body2" color="textSecondary" component="p" value={ taskText }
                                  onChange={ onChangeText }>
                        { text } { task.text }
                      </Typography>
                  )
              }

              { status
                  ? (
                      <Typography variant="body2" color="textSecondary" component="p">
                        STATUS: done
                        <CheckCircleOutlineIcon/>
                      </Typography>
                  )
                  : (
                      <Typography variant="body2" color="textSecondary" component="p">
                        STATUS: not done
                      </Typography>
                  )
              }

            </div>

          </CardContent>
        </CardActionArea>
        { token &&

        <CardActions className={ styles.flexBts }>
          <div>
            { isEditMode && <Button onClick={ onUpdateTask } variant="outlined">
              save task
            </Button> }

            <IconButton onClick={ onEditTask } aria-label="delete">
              Edit <EditIcon/>
            </IconButton>

            { status
                ? (
                    <div></div>
                ) : (
                    <IconButton onClick={ onDoneTask } aria-label="delete">
                      Done <CheckCircleOutlineIcon/>
                    </IconButton>
                )
            }
          </div>
        </CardActions>
        }
      </div>
  );
}

const mapStateToProps = state => ({
  isSaving: getIsSavingTask(state),
});

export default connect(mapStateToProps)(TaskItem);