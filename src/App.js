import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

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

const initialState = {
  isAuthenticated: false,

  user: [
    {
      id: 1,
      avatar: '/assets/logo/man.svg',
      fullname: 'Sakti Dewantoro',
      email: 'saktyd@gmail.com',
      telephone: '081234567',
      city: 'Jakarta',
      address: 'Kemang, Jakarta Selatan, Jakarta, Indonesia'
    },
    {
      id: 2,
      avatar: '/assets/logo/man.svg',
      fullname: 'Ajin',
      email: 'ajin@gmail.com',
      telephone: '081234567',
      city: 'Jakarta',
      address: 'Kemang, Jakarta Selatan, Jakarta, Indonesia'
    },
    {
      id: 3,
      avatar: '/assets/logo/man.svg',
      fullname: 'Bara',
      email: 'bara@gmail.com',
      telephone: '081234567',
      city: 'Jakarta',
      address: 'Kemang, Jakarta Selatan, Jakarta, Indonesia'
    }
  ]
}

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
