import { decodeToken } from '../../helpers/jwtDecoded'

const initialState = {
  token: null,
  data: null,
  isAuthenticated: false
  //   isAdmin: browserStorage.getKey('isAdmin') || null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_STATE': {
      return action.payload
    }

    case 'REMOVE_USER_STATE': {
      return {}
    }

    default: {
      return state
    }
  }
}
