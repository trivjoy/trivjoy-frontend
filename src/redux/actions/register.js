import { request } from '../../helpers/index'

export const register = data => {
  return async dispatch => {
    dispatch(registerStarted())

    try {
      await request({
        method: 'post',
        url: '/users/register',
        data
      })

      dispatch(registerSuccess())
    } catch (error) {
      dispatch(registerError())
    }
  }
}

const registerStarted = () => ({
  type: 'REGISTER_PROCESS'
})

const registerSuccess = () => ({
  type: 'REGISTER_SUCCESS'
})

const registerError = error => ({
  type: 'REGISTER_ERROR'
})
