import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

class MyNav extends Component {
  render () {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Megan Dosé</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to='/about'>
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
            <LinkContainer to='/portfolio'>
              <NavItem eventKey={2}>Portfolio</NavItem>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <NavItem eventKey={3}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MyNav

// TODO: Add Unit Tests, Try Bootstrap Tab Components for customized Navbar look
