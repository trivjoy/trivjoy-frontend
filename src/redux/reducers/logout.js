const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false
}

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT_BEGIN': {
      return {
        ...state,
        isLoading: true,
        latestError: null
      }
    }

    case 'LOGOUT_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.response
      }
    }

    case 'LOGOUT_ERROR': {
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

export default logoutReducer
