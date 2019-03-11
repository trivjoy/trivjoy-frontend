import { request } from '../helpers/index'

export const insertUser = ({
  name,
  email,
  phone,
  age,
  gender,
  city,
  address,
  password
}) => {
  return async dispatch => {
    dispatch(insertUserStarted())

    try {
      const response = await request({
        method: 'post',
        url: '/register',
        data: {
          name: name,
          email: email,
          phone: phone,
          age: age,
          gender: gender,
          city: city,
          address: address,
          password: password
        }
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
