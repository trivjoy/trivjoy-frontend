const initialState = {
  isLoading: false,
  data: null,
  error: null
}

function approveJoinReducer(state = initialState, action) {
  switch (action.type) {
    case 'APPROVE_JOIN_BEGIN': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'APPROVE_JOIN_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }

    case 'APPROVE_JOIN_ERROR': {
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

export default approveJoinReducer
