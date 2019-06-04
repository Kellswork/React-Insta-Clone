import React from "react";
import Comments from './Comments';
import CommentForm from './CommentForm';
import "./CommentSection.css";
import uuid from 'uuid';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        comments: this.props.comments,
        commentText: ''
    }
  }
  componentWillReceiveProps(nextProps) {
      this.setState({
          commentText: "",
          comments: nextProps.comments
      });
  }

  addNewComment = (event) => {
        event.preventDefault();
       this.props.handleAddComment(this.props.postId, this.state.commentText);
  }

  handleTextChange = (event) => {
      this.setState({
          ...this.state,
          commentText: event.target.value
      });
  }

  render() {
    const commentsData = this.state.comments.map(comment => {
        return <Comments key={uuid()} commentData={comment} />
    })
    return (
      <div>
          {commentsData}
          <CommentForm 
            handleTextChange={this.handleTextChange} 
            addNewComment={this.addNewComment} 
            commentText={this.state.commentText} />
      </div>
    );
  }
}

export default CommentSection;
