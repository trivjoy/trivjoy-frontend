import { combineReducers } from 'redux'
// import { connectRouter } from 'connected-react-router'

import registerReducer from './register'
import loginReducer from './login'
import userReducer from './users'
import logoutReducer from './logout'
import createTripsReducer from './create-trips'
import tripsReducer from './trips'
import tripDetailsReducer from './trip-details'

export default combineReducers({
  // router: connectRouter(history),
  register: registerReducer,
  login: loginReducer,
  user: userReducer,
  logout: logoutReducer,
  create_trips: createTripsReducer,
  trips: tripsReducer,
  tripDetails: tripDetailsReducer
})
