import React, { Component } from 'react'
import './App.css'
import MyNav from './MyNav.js'
import Home from './Home.js'
import About from './About.js'
import Portfolio from './Portfolio.js'
import Contact from './Contact.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <MyNav />

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App
