import React from 'react';
import './Comment.css';

function CommentSection(props) {
    const  {comments} = props
    return(
        <div className='comments'>
         <p className='username'>{comments.username}</p>
         <p>{comments.text}</p>
        </div>
    )
}

export default CommentSection;