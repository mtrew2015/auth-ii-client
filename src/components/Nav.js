import React from 'react';
import {NavLink} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Auth Mini II APP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavLink className="nav-link" to='/' exact>Home</NavLink>
              <NavLink className="nav-link" to='/signin'>Sign In</NavLink>
              <NavLink className="nav-link"to='/users'>Users</NavLink>
              <NavLink className="nav-link" to='/register'> Register</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}