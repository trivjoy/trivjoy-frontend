import { request } from '../../helpers/index'

export const register = data => {
  return async dispatch => {
    dispatch(registerStarted())

    try {
      const response = await request({
        method: 'post',
        url: '/users/register',
        data
      })

      dispatch(registerSuccess(response))
    } catch (error) {
      dispatch(registerError(error))
    }
  }
}

const registerStarted = () => ({
  type: 'INSERT_USER_PROCESS'
})

const registerSuccess = response => ({
  type: 'INSERT_USER_SUCCESS',
  payload: {
    users: response.data.users
  }
})

const registerError = error => ({
  type: 'INSERT_USER_ERROR',
  payload: {
    error
  }
})
