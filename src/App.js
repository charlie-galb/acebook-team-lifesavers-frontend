import './App.css';
import React, { Component } from 'react';
import Posts from './components/Posts.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Dashboard from './components/Dashboard.js'

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
        <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/dashboard"} component={Dashboard} />
        </Switch>
        </BrowserRouter>
        <Posts posts={this.state.posts}/>
      </div>
  );
  }
}

export default App;
