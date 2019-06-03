import React from 'react';

function CommentSection(props) {
    const  {comments} = props
    return(
        <div>
         <p>{comments.username}</p>
         <p>{comments.text}</p>
        </div>
    )
}

export default CommentSection;