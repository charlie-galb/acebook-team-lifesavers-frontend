import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Posts from './components/Posts.js';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Posts />
      </div>
  );
  }
}

export default App;
