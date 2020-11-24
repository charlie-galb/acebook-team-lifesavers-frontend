import './App.css';
import React, { Component } from 'react';
import Posts from './components/Posts.js';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        message: "First post",
        user_id: 1,
        timestamp: "01.01.2020 01:01:01"
      },
      {
        id: 2,
        message: "Second post",
        user_id: 2,
        timestamp: "02.02.2020 02:02:02"
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <Posts posts={this.state.posts}/>
      </div>
  );
  }
}

export default App;
