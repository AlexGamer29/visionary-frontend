import { START_LOADING, INFO_SUCCESS, INFO_FAIL } from '../constants/auth'
import * as api from '../api'

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING,
    })
    const data = await api.fetchUserProfile()
    dispatch({
      type: INFO_SUCCESS,
      payload: data,
    })
  } catch (error) {
    console.log(error)
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: INFO_FAIL,
      payload: message,
    })
  }
}
