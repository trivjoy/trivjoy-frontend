import { combineReducers } from 'redux'

const usersInitialState = {
  name: '',
  email: '',
  phone: '',
  age: '',
  gender: '',
  city: '',
  address: '',
  password: ''
}

const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case 'INSERT_USER_STARTED':
      return {
        ...state,
        loading: true
      }

    case 'INSERT_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        users: [...state.todos, action.payload.todo]
      }

    case 'INSERT_USER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    case 'GET_TUSER': {
      return {
        users: state
      }
    }

    default: {
      return state
    }
  }
}

export default usersReducer
