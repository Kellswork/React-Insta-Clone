import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import './PostContainer.css';

function PostContainer(props) {
    
 const { posts } = props;
 const showPost = {display: posts.display ? 'block' : 'none'};
  return (
    <div className='post-container' style={showPost}>
     <div className='user-thumbnail'>
     <img src={posts.thumbnailUrl} alt="thumbnail" />
      <p>{posts.username}</p>
     </div>
      <img src={posts.imageUrl} alt="upload" />
      <p>
        <i className="far fa-heart" onClick={() => props.handleIncreaseLikes(posts.id)}/>
        <i className="far fa-comment" />
      </p>
      <p>{posts.likes} likes</p>
      <p>{posts.timestamp}</p>
      <CommentSection handleAddComment={props.handleAddComment} postId={posts.id} comments={posts.comments} />
    </div>
  );
}

export default PostContainer;
