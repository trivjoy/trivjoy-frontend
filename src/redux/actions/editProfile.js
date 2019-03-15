import { request } from '../../helpers/index'
import { setUserState } from './login'

export const editProfileBegin = () => ({
  type: 'EDIT_PROFILE_BEGIN'
})

export const editProfileSuccess = response => {
  return {
    type: 'EDIT_PROFILE_SUCCESS',
    payload: response.data.result
  }
}

export const editProfileError = error => ({
  type: 'JOIN_DETAILS_ERROR',
  payload: error
})

export const editProfile = (id, data) => {
  return dispatch => {
    dispatch(editProfileBegin())

    request({
      method: 'put',
      url: `/users/${id}`,
      data
    })
      .then(response => {
        dispatch(editProfileSuccess(response))
        dispatch(setUserState({ data: response.data.foundUser }))
      })
      .catch(error => {
        dispatch(editProfileError(error))
      })
  }
}
