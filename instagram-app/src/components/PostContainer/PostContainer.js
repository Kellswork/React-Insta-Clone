import React from "react";
import CommentSection from "../CommentSection/Comment";
import './PostContainer.css';
import uuid from "uuid";

function PostContainer(props) {
  const { posts } = props;
  const comments = posts.comments.map(comment => {
    return <CommentSection key={uuid()} comments={comment} />;
  });
  return (
    <div post-container>
     <div className='user-thumbnail'>
     <img src={posts.thumbnailUrl} alt="thumbnail" />
      <p>{posts.username}</p>
     </div>
      <img src={posts.imageUrl} alt="upload" />
      <p>
        <i className="far fa-heart" />
        <i className="far fa-comment" />
      </p>
      <p>{posts.likes} likes</p>
      {comments}
      <p>{posts.timestamp}</p>
      <hr/>
      <textarea type="text" rows="2" cols="10" placeholder='Add a comment...'></textarea>
    </div>
  );
}

export default PostContainer;
