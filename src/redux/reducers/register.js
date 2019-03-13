const usersInitialState = {
  loading: false,
  error: false
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
        loading: false
      }

    case 'REGISTER_ERROR':
      return {
        ...state,
        loading: false,
        error: true
      }

    default: {
      return state
    }
  }
}

export default registerReducer
