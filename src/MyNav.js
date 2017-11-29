import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class MyNav extends Component {
  render () {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Megan Dosé</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href='#'>About Me</NavItem>
            <NavItem eventKey={2} href='#'>Portfolio</NavItem>
            <NavItem eventKey={2} href='#'>Blog</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href='#'>Kitties</NavItem>
            <NavItem eventKey={2} href='#'>Contact</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MyNav
