import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Trips from './pages/Trips'
import about_us from './pages/About_us'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/post" component={Post} />
          <Route path="/trips" component={Trips} />
          <Route path="/aboutUs" component={about_us} />
        </Switch>
      </Router>
    )
  }
}

export default App
