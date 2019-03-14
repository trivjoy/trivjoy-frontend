import { request } from '../../helpers/index'

export const requestJoinBegin = () => ({
  type: 'REQUEST_JOIN_BEGIN'
})

export const requestJoinSuccess = response => {
  return {
    type: 'REQUEST_JOIN_SUCCESS',
    payload: response.data.result
  }
}

export const requestJoinError = error => ({
  type: 'JOIN_DETAILS_ERROR',
  payload: error
})

export const requestJoin = id => {
  return dispatch => {
    dispatch(requestJoinBegin())

    request({
      method: 'put',
      url: `/trips/${id}/request`
    })
      .then(response => {
        dispatch(requestJoinSuccess(response))
      })
      .catch(error => {
        dispatch(requestJoinError(error))
      })
  }
}
