const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_BEGIN': {
      return {
        ...state,
        isLoading: true,
        latestError: null
      }
    }

    case 'LOGIN_USER_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.userData
      }
    }

    case 'LOGIN_USER_ERROR': {
      return {
        ...state,
        isLoading: false,
        latestError: action.payload.error,
        latestResponse: null
      }
    }

    default: {
      return state
    }
  }
}

export default loginReducer
