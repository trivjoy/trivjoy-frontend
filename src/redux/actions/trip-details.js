import { request } from '../../helpers/index'

export const getTripDetailsBegin = () => ({
  type: 'GET_TRIP_DETAILS_BEGIN'
})

export const getTripDetailsSuccess = response => {
  return {
    type: 'GET_TRIP_DETAILS_SUCCESS',
    payload: response.data.trips
  }
}

export const getTripDetailsError = error => ({
  type: 'GET_TRIP_DETAILS_ERROR',
  payload: error
})

export const getTripDetails = () => {
  return dispatch => {
    dispatch(getTripDetailsBegin())

    request({
      method: 'get',
      url: '/trips/:id'
    })
      .then(response => {
        dispatch(getTripDetailsSuccess(response))
      })
      .catch(error => {
        dispatch(getTripDetailsError(error))
      })
  }
}
