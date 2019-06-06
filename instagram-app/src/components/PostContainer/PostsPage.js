import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

const PostsPage = ({
  data,
  handleAddComment,
  handleIncreaseLikes,
  handleSearchBar
}) => {
  return (
    <div className="App">
      <SearchBar handleSearchBar={handleSearchBar} />
      {data.map(objectData => {
        return (
          <PostContainer
            handleAddComment={handleAddComment}
            handleIncreaseLikes={handleIncreaseLikes}
            key={objectData.id}
            posts={objectData}
          />
        );
      })}
    </div>
  );
};

export default PostsPage;
