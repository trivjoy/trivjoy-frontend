const initialState = {
  isLoading: false,
  data: null,
  error: null
}

function editProfileReducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_PROFILE_BEGIN': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'EDIT_PROFILE_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }

    case 'EDIT_PROFILE_ERROR': {
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

export default editProfileReducer
