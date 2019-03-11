import { request } from '../../helpers/index'
import browserStorage from '../browserStorage'

export const loginUserBegin = () => ({
  type: 'LOGIN_USER_BEGIN'
})

export const loginUserSuccess = userData => {
  console.log(userData)
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: {
      userData: userData
    }
  }
}

export const loginUserError = error => ({
  type: 'LOGIN_USER_ERROR',
  payload: {
    error: error
  }
})

export const setUserState = data => ({
  type: 'SET_USER_STATE',
  payload: data
})

export const loginUser = data => {
  return dispatch => {
    dispatch(loginUserBegin())

    request({
      method: 'post',
      url: '/users/login',
      data
    })
      .then(response => {
        dispatch(loginUserSuccess(response.data))

        browserStorage.setKey('isAuthenticated', true)

        browserStorage.setKey('token', response.data.token)

        dispatch(
          setUserState({
            token: response.data.token,
            isAuthenticated: true,
            user: response.data.user
          })
        )
      })
      .catch(error => {
        console.log(error)
        dispatch(loginUserError(error))

        browserStorage.setKey('isAuthenticated', false)
      })
  }
}
