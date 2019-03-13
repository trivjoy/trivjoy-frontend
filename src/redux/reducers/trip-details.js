const initialState = {
  isLoading: false,
  data: [],
  error: null
}

function tripDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TRIP_DETAILS_BEGIN': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'GET_TRIP_DETAILS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }

    case 'GET_TRIP_DETAILS_ERROR': {
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

export default tripDetailsReducer
