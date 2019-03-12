const initialState = {
  isLoading: false,
  data: [],
  error: null
}

function tripsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TRIPS_BEGIN': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'GET_TRIPS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }

    case 'GET_TRIPS_ERROR': {
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

export default tripsReducer
