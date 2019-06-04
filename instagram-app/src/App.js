import React from 'react';
import uuid from 'uuid';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData.map(post => ({
        ...post,
        id: uuid()
      }))
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
        console.log(post.id,  postId);
        if(post.id ===  postId) {
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      })
    })

  }

  render () {
    const data = this.state.data.map(objectData => {
      return <PostContainer handleAddComment={this.handleAddComment} key={objectData.id} posts={objectData} />
  })

  return (
    <div className="App">
      <SearchBar />
      {data}
    </div>
  );
  }
 
}

export default App;
