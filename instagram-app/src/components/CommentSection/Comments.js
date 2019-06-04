import React from 'react';
import './CommentSection.css';

function Comments(props) {
    const {commentData} = props;
return(
      <div className="comments">
        <p className="username">{commentData.username}</p>
        <p>{commentData.text}</p>
      </div>
)
}

export default Comments;