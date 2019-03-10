import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Trips from './pages/Trips'
import About_us from './pages/About_us'
import Safety from './pages/Safety'
import Help from './pages/Help'
import CreatePost from './pages/CreatePost'
import TripDetails from './pages/TripDetails'

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
          <Route path="/aboutUs" component={About_us} />
          <Route path="/safety" component={Safety} />
          <Route path="/help" component={Help} />
          <Route path="/create-post" component={CreatePost} />
          <Route path="/trip-details" component={TripDetails} />
        </Switch>
      </Router>
    )
  }
}

export default App
