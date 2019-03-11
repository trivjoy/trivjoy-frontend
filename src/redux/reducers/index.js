import { combineReducers } from 'redux'
// import { connectRouter } from 'connected-react-router'

import registerReducer from './register'
import loginReducer from './login'
import userReducer from './user'

export default combineReducers({
  // router: connectRouter(history),
  register: registerReducer,
  login: loginReducer,
  user: userReducer
})
