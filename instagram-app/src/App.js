import React from "react";
import uuid from "uuid";
import "./App.css";
import dummyData from "./dummy-data.js";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data:
        JSON.parse(localStorage.getItem("post")) ||
        dummyData.map(post => ({
          ...post,
          id: uuid(),
          display: true
        }))
    });
  }
  handleAddComment = async (postId, commentText) => {
    const newComment = {
      username: localStorage.getItem('username'),
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
    await localStorage.setItem("post", JSON.stringify(this.state.data));
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
    await localStorage.setItem("post", JSON.stringify(this.state.data));
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
    await localStorage.setItem("post", JSON.stringify(this.state.data));
  };

  render() {
    
    return (
      <ComponentFromWithAuthenticate data={this.state.data}
        handleIncreaseLikes={this.handleIncreaseLikes}
         handleAddComment={this.handleAddComment} handleSearchBar={this.handleSearchBar} />
    );
  }
}
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage, Login);

export default App;
