import { request } from '../../helpers/index'
import browserStorage from '../browserStorage'

export const logoutBegin = () => ({
  type: 'LOGOUT_BEGIN'
})

export const logoutUserSuccess = response => {
  return {
    type: 'LOGOUT_SUCCESS',
    payload: {
      response
    }
  }
}

export const logoutUserError = error => ({
  type: 'LOGOUT_ERROR',
  payload: {
    error
  }
})

export const removeUserState = () => ({
  type: 'REMOVE_USER_STATE'
})

export const logoutUser = payload => {
  return dispatch => {
    dispatch(logoutBegin())

    request({
      method: 'get',
      url: '/users/logout'
    })
      .then(response => {
        dispatch(logoutUserSuccess(response))

        dispatch(removeUserState())

        browserStorage.removeKey('isAuthenticated')

        browserStorage.removeKey('token')
      })
      .catch(error => {
        dispatch(logoutUserError(error))
      })
  }
}
