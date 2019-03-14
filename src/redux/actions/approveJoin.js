import { request } from '../../helpers/index'

export const approveJoinBegin = () => ({
  type: 'APPROVE_JOIN_BEGIN'
})

export const approveJoinSuccess = response => {
  return {
    type: 'APPROVE_JOIN_SUCCESS',
    payload: response.data.result
  }
}

export const approveJoinError = error => ({
  type: 'JOIN_DETAILS_ERROR',
  payload: error
})

export const approveJoin = (id, userId) => {
  return dispatch => {
    dispatch(approveJoinBegin())

    request({
      method: 'put',
      url: `/trips/${id}/approve`,
      data: {
        approvedUser: userId
      }
    })
      .then(response => {
        dispatch(approveJoinSuccess(response))
      })
      .catch(error => {
        dispatch(approveJoinError(error))
      })
  }
}
