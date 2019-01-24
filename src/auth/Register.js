import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default class Register extends Component {
state ={
username: '',
email: '',
department:''
}

handleInputChange = event => {
    event.preventDefault();
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div className="form">
      <Form>
        <FormGroup>
        <h1>Register For a New Account</h1>
            <Label for="username">Username</Label>
            <Input onChange={this.handleInputChange}type="username" name="username" id="username" placeholder="username" />
          <Label for="Email">Email</Label>
            <Input onChange={this.handleInputChange} type="email" name="email" id="email" placeholder="email" />
          <Label for="department">Department</Label>
            <Input onChange={this.handleInputChange} type="department" name="department" id="department" placeholder="department" />
          </FormGroup>
        <Button>Submit</Button>
        {console.log(this.state)}
      </Form>
      </div>
    );
  }
}

