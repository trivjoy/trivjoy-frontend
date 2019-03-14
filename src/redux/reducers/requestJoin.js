const initialState = {
  isLoading: false,
  data: null,
  error: null
}

function requestJoinReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_JOIN_BEGIN': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'REQUEST_JOIN_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }

    case 'REQUEST_JOIN_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export default requestJoinReducer
