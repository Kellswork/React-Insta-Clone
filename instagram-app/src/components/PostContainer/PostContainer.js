import React from 'react';
import PostDetails from './PostDetails';
import CommentSection from '../CommentSection/Comment';

function PostContainer(props) {
    const {posts} = props;
    const comments = posts.comments.map((comment)=> {
     return  <CommentSection comments={comment} />
    })
    return(
       <div>
        <PostDetails posts= {posts} />
        <CommentSection comments = {posts.comments} />
        {comments}
        <input type='text' />
       </div>
    )

}

export default PostContainer;