import React from "react";
import "./CommentSection.css";

function CommentForm(props) {
  return (
    <form onSubmit={event => props.addNewComment(event)}>
      <input
        type="text"
        placeholder="Add a comment..."
        value={props.commentText}
        onChange={event => props.handleTextChange(event)}
      />
    </form>
  );
}

export default CommentForm;
