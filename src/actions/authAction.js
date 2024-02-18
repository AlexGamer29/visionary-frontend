// This file contains actions for React Redux
import {
  AUTH_FAIL,
  AUTH,
  START_LOADING,
  LOGOUT,
  INFO_SUCCESS,
  INFO_FAIL,
} from '../constants/auth'
import * as api from '../api'

export const login = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const data = await api.login(formData)
    dispatch({ type: AUTH, data })

    const user = await api.fetchUserProfile()
    dispatch({ type: INFO_SUCCESS, payload: user })
    
    router('/')
  } catch (error) {
    console.log(error)
    const message = error.response?.data ? error.response.data : error.message
    dispatch({
      type: AUTH_FAIL,
      payload: message,
    })
  }
}

export const register = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.register(formData)
    console.log(data)

    dispatch({ type: AUTH, data })

    router('/login')
  } catch (errors) {
    const message = errors.response?.data
      ? errors.response.data
      : errors.message
    console.log(errors)
    dispatch({
      type: AUTH_FAIL,
      payload: message,
    })
  }
}

export const logout = (router) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT })

    router('/login')
  } catch (error) {
    console.error(error)
  }
}
