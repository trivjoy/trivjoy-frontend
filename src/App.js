import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { ConnectedRouter } from 'connected-react-router'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Post from './pages/Post'
import Trips from './pages/Trips'
import About from './pages/About'
import Safety from './pages/Safety'
import Help from './pages/Help'
import CreateTrip from './pages/CreateTrip'
import TripDetails from './pages/TripDetails'
import { connect } from 'react-redux'
import browserStorage from './redux/browserStorage'
import { getOneUser } from './redux/actions/users'

class App extends Component {
  componentDidMount = async () => {
    const token = browserStorage.getKey('token')

    if (token) {
      this.props.dispatch(getOneUser(token))
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/post" component={Post} />
          <Route path="/about" component={About} />
          <Route path="/safety" component={Safety} />
          <Route path="/help" component={Help} />
          <Route path="/create" component={CreateTrip} />
          <Route path="/trips/:id" component={TripDetails} />
          <Route path="/trips" component={Trips} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps)(App)
