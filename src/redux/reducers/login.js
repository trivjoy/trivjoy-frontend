const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false,
  error: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_BEGIN': {
      return {
        ...state,
        isLoading: true,
        latestError: null
      }
    }

    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.userData
      }
    }

    case 'LOGIN_ERROR': {
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error,
        latestResponse: null,
        error: true
      }
    }

    default: {
      return state
    }
  }
}

export default loginReducer
