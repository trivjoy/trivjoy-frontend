import { request } from '../../helpers/index'
import browserStorage from '../browserStorage'

export const loginBegin = () => ({
  type: 'LOGIN_BEGIN'
})

export const loginSuccess = userData => {
  console.log(userData)
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      userData: userData
    }
  }
}

export const loginError = error => ({
  type: 'LOGIN_ERROR',
  payload: {
    error: error
  }
})

export const setUserState = data => ({
  type: 'SET_USER_STATE',
  payload: data
})

export const login = data => {
  return dispatch => {
    dispatch(loginBegin())

    request({
      method: 'post',
      url: '/users/login',
      data
    })
      .then(response => {
        dispatch(loginSuccess(response.data))

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
        dispatch(loginError(error))

        browserStorage.setKey('isAuthenticated', false)
      })
  }
}
