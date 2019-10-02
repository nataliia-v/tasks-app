import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { Link } from "react-router-dom";
import { getIsSavingTask } from "../../state/tasks/selectors";

// import styles from './TaskItem.module.scss';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//     fontSize: 10,
//   },
// }));

function TaskItem(props) {
  const {task} = props;
  // const postUrl = `/tasks }`;

  // const [isEditMode, setIsEditMode] = useState(false);
  // const [isViewComments, setIsViewComments] = useState(false);
  // const [postTitle, setPostTitle] = useState(task.title);
  // const [postBody, setPostBody] = useState(task.body);
  // const [commentBody, setCommentBody] = useState("");

  // const onChangeTitle = e => {
  //   const value = e.target.value;
  //   setPostTitle(value);
  // };

  // const onChangeBody = e => {
  //   const value = e.target.value;
  //   setPostBody(value);
  // };
  //
  // const onDeletePost = () => {
  //   onDelete(post.id)
  // };
  //
  // const onViewComments = () => {
  //   setIsViewComments(prevIsViewComments => !prevIsViewComments)
  // };
  //
  // const onEditPost = () => {
  //   setIsEditMode(true);
  // };
  //
  // const onUpdatePost = () => {
  //   setIsEditMode(false);
  //   const data = {id: post.id, title: postTitle, body: postBody};
  //
  //   onUpdate(data);
  // };
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
  return (
      <div>
        <CardActionArea>
          <CardContent>

                    {/*<Link className={ styles.link } to={ postUrl }>*/}
                      <div>
                        <Typography gutterBottom variant="h5" component="h2">
                          { task.username }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          { task.email }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          { task.text }
                        </Typography>
                      </div>

                    {/*</Link>*/}

          </CardContent>
        </CardActionArea>
        {/*<CardActions className={ styles.flexBts }>*/}
        {/*  <div>*/}
        {/*    { isEditMode && <Button onClick={ onUpdatePost } variant="outlined">*/}
        {/*      save post*/}
        {/*    </Button> }*/}
        {/*    <Button onClick={ onViewComments } variant="outlined">*/}
        {/*      View comments*/}
        {/*    </Button>*/}
        {/*    <IconButton onClick={ onDeletePost } className={ classes.button } aria-label="delete">*/}
        {/*      <DeleteIcon/>*/}
        {/*    </IconButton>*/}
        {/*    <IconButton onClick={ onEditPost } className={ classes.button } aria-label="delete">*/}
        {/*      <EditIcon/>*/}
        {/*    </IconButton>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    { isViewComments &&*/}
        {/*    <div>*/}
        {/*      <form className={ styles.form } onSubmit={ createComment }>*/}
        {/*        <input className={ styles.inputFormComment } onChange={ onChangeBodyComment } type="text"/>*/}
        {/*        <button className={ styles.btn }>add a comment</button>*/}
        {/*      </form>*/}
        {/*      <ul className={ styles.commentsList }>*/}
        {/*        {*/}
        {/*          post.comments && post.comments.map((comment) => {*/}
        {/*            return (*/}
        {/*                <li key={ comment.id }><Comment comment={ comment }/></li>*/}
        {/*            )*/}
        {/*          })*/}
        {/*        }*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*    }*/}
        {/*  </div>*/}
        {/*</CardActions>*/}
      </div>
  );
}

const mapStateToProps = state => ({
  isSaving: getIsSavingTask(state),
});

export default connect(mapStateToProps)(TaskItem);