import { request } from '../../helpers/index'
import { getTrips } from './trips'

export const createTripsBegin = () => ({
  type: 'CREATE_TRIPS_BEGIN'
})

export const createTripsSuccess = response => {
  return {
    type: 'CREATE_TRIPS_SUCCESS',
    payload: {
      response
    }
  }
}

export const createTripsError = error => ({
  type: 'CREATE_TRIPS_ERROR',
  payload: error
})

export const createTrips = data => {
  return async dispatch => {
    dispatch(createTripsBegin())

    try {
      const response = await request({
        method: 'post',
        url: '/trips/',
        data
      })
      dispatch(createTripsSuccess(response))
      dispatch(getTrips())

      //   dispatch(push(`/CREATE_TRIPS/${response.data.result.id}`))
    } catch (error) {
      dispatch(createTripsError(error))
    }
  }
}
