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
    this.setState({
      data: JSON.parse(localStorage.getItem('post'))
    })   
  }
  handleAddComment = async (postId, commentText) => {
    const newComment = {
      username: "Kells",
      text: commentText
    };

    await this.setState({
      ...this.state,
      data: this.state.data.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      })
    });
   await localStorage.setItem('post', JSON.stringify(this.state.data));
  };

 handleIncreaseLikes = async postId => {
   await this.setState({
      data: this.state.data.map(post => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      })
    });
    await localStorage.setItem('post', JSON.stringify(this.state.data));
  };

  handleSearchBar = async event => {
    this.setState({
      ...this.state,
      data: this.state.data.map(post => {
        if (!post.username.includes(event.target.value)) {
          return { ...post, display: false };
        }
        return { ...post, display: true };
      })
    });
    await localStorage.setItem('post', JSON.stringify(this.state.data));
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

