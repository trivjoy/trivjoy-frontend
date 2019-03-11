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

const registerReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case 'REGISTER_STARTED':
      return {
        ...state,
        loading: true
      }

    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        users: [...state.todos, action.payload.todo]
      }

    case 'REGISTER_ERROR':
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

export default registerReducer
