import { request } from '../../helpers/index'
import { setUserState } from './login'

export const getOneUserBegin = () => ({
  type: 'GET_ONE_USER_BEGIN'
})

export const getOneUserSuccess = response => {
  return {
    type: 'GET_ONE_USER_SUCCESS',
    payload: {
      response
    }
  }
}

export const getOneUserError = error => ({
  type: 'GET_ONE_USER_ERROR',
  payload: {
    error
  }
})

export const getOneUser = token => {
  return dispatch => {
    dispatch(getOneUserBegin())

    request({
      method: 'get',
      url: `/users/profile`
    })
      .then(response => {
        dispatch(getOneUserSuccess(response))
        dispatch(
          setUserState({
            token: token,
            isAuthenticated: true,
            data: response.data.user
          })
        )
      })
      .catch(error => {
        dispatch(getOneUserError(error))
      })
  }
}
