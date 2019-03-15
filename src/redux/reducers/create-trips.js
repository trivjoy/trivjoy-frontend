const initialState = {
  latestResponse: null,
  latestError: null,
  isLoading: false,
  succes: false
}

const createTripsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_TRIPS_BEGIN': {
      return {
        ...state,
        isLoading: true,
        latestError: null
      }
    }

    case 'CREATE_TRIPS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        latestResponse: action.payload.response,
        succes: true
      }
    }

    case 'CREATE_TRIPS_ERROR': {
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

export default createTripsReducer
