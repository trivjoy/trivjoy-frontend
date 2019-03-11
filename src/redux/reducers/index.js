import { combineReducers } from 'redux'
// import { connectRouter } from 'connected-react-router'

import registerReducer from './insertUser'
import loginReducer from './loginUser'
import userReducer from './user'

export default combineReducers({
  // router: connectRouter(history),
  register: registerReducer,
  login: loginReducer,
  user: userReducer
})
