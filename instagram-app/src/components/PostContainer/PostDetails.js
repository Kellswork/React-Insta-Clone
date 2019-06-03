import React from 'react';

function PostDetails({posts}) {
    return(
        <div>
            <img src={posts.imageUrl} alt='uplaod'/>
            <img src={posts.thumbnailUrl} alt='thumbnail' />
            <p>{posts.likes} likes</p>
            <p>{posts.timestamp}</p>
        </div>
    )
}

export default PostDetails;