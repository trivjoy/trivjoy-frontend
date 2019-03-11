import { request } from '../../helpers/index'

export const insertUser = data => {
  return async dispatch => {
    dispatch(insertUserStarted())

    try {
      const response = await request({
        method: 'post',
        url: '/users/register',
        data
      })

      dispatch(insertUserSuccess(response))
    } catch (error) {
      dispatch(insertUserError(error))
    }
  }
}

const insertUserStarted = () => ({
  type: 'INSERT_USER_PROCESS'
})

const insertUserSuccess = response => ({
  type: 'INSERT_USER_SUCCESS',
  payload: {
    users: response.data.users
  }
})

const insertUserError = error => ({
  type: 'INSERT_USER_ERROR',
  payload: {
    error
  }
})
