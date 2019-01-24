import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    users: [],
    isAuthenticated: false
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const endpoint = "http://localhost:3300/api/users";
    const options = {
      headers: {
        Authorization: token
      }
    }
    axios.get(endpoint, options)
      .then(res => {
        console.log(res);
        this.setState({
          users: res.data,
          isAuthenticated: true
        })
      }).catch(err => {
        console.log('error from /api/users', err);
      })
  }
  render() {
    const users = this.state.users
    return (
      <div>
        <h2>List of Users</h2>
        <ul>
          {
            users.map(user => {
              return <li key={user.id}>Username: {user.username}, Password: {user.password}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Users;
