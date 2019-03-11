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

export const setUserState = user => ({
  type: 'SET_USER_STATE',
  payload: {
    user: user
  }
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
        console.log(response)
        dispatch(loginUserSuccess(response.data))

        browserStorage.setKey('isAuthenticated', true)

        browserStorage.setKey('token', response.data.token)

        return response
      })
      .then(response => {
        dispatch(
          setUserState({
            token: response.data.token,
            name: response.data.user.name,
            email: response.data.user.email,
            isAuthenticated: true
          })
        )
      })
      .catch(error => {
        dispatch(loginUserError(error))

        browserStorage.setKey('isAuthenticated', false)
      })
  }
}
