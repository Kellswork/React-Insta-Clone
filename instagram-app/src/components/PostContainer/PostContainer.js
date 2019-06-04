import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import './PostContainer.css';

function PostContainer(props) {
  const { posts } = props;

  return (
    <div className='post-container'>
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
      <p>{posts.timestamp}</p>
      <CommentSection handleAddComment={props.handleAddComment} postId={posts.id} comments={posts.comments} />
    </div>
  );
}

export default PostContainer;
