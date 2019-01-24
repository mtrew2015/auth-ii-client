import React, { Component } from 'react';
import {Route } from 'react-router-dom';
import './App.scss';
import Users from './users/Users';
import Signin from './auth/Signin';
import Register from './auth/Register';
import Navigation from './components/Nav'

const Home = props => {
  return (
    <div>
      <h1>Click Register Or Sign In To Start</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <Navigation/>
          </nav>
        <Route path='/' component={Home} exact></Route>
        <Route path='/signin' component={Signin} exact></Route>
        <Route path='/users' component={Users} exact></Route>
        <Route path='/register' component={Register} exact></Route> 
        </header>
      </div>
    );
  }
}

export default App;