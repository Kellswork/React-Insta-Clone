import React from "react";
import uuid from "uuid";
import "./App.css";
import dummyData from "./dummy-data.js";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: dummyData.map(post => ({
        ...post,
        id: uuid(),
        display: true
      }))
    });
  }
  handleAddComment = (postId, commentText) => {
    const newComment = {
      username: "Kells",
      text: commentText
    };

    this.setState({
      ...this.state,
      data: this.state.data.map(post => {
        console.log(post.id, postId);
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      })
    });
  };

  handleIncreaseLikes = postId => {
    this.setState({
      data: this.state.data.map(post => {
        console.log(post);
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      })
    });
  };

  handleSearchBar = event => {
    this.setState({
      ...this.state,
      data: this.state.data.map(post => {
        if (!post.username.includes(event.target.value)) {
          console.log(post);
          return { ...post, display: false };
        }
        return { ...post, display: true };
      })
    });
  };

  render() {
    const data = this.state.data.map(objectData => {
      return (
        <PostContainer
          handleAddComment={this.handleAddComment}
          handleIncreaseLikes={this.handleIncreaseLikes}
          key={objectData.id}
          posts={objectData}
        />
      );
    });

    return (
      <div className="App">
        <SearchBar handleSearchBar={this.handleSearchBar} />
        {data}
      </div>
    );
  }
}

export default App;
