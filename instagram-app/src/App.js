import React from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  const data = dummyData.map(objectData => {
      return <PostContainer posts = {objectData} />
  })
  return (
    <div className="App">
      {data}
      <h1>You can do this KC</h1>
    </div>
  );
}

export default App;
