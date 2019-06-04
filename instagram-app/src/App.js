import React from 'react';
import uuid from 'uuid';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const data = dummyData.map(objectData => {
      return <PostContainer key={uuid()} posts = {objectData} />
  })
  return (
    <div className="App">
      <SearchBar />
      {data}
    </div>
  );
}

export default App;
