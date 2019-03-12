import { request } from '../../helpers/index'

export const getTripsBegin = () => ({
  type: 'GET_TRIPS_BEGIN'
})

export const getTripsSuccess = response => {
  return {
    type: 'GET_TRIPS_SUCCESS',
    payload: response.data.trips
  }
}

export const getTripsError = error => ({
  type: 'GET_TRIPS_ERROR',
  payload: error
})

export const getTrips = () => {
  return dispatch => {
    dispatch(getTripsBegin())

    request({
      method: 'get',
      url: '/trips'
    })
      .then(response => {
        dispatch(getTripsSuccess(response))
      })
      .catch(error => {
        dispatch(getTripsError(error))
      })
  }
}
