// This file contains actions for React Redux
import {
  AUTH_FAIL,
  AUTH,
  START_LOADING,
  LOGOUT,
  INFO_SUCCESS,
  INFO_FAIL
} from '../constants/auth'
import * as api from '../api'
import { type Dispatch } from 'redux'
import { NavigateFunction } from 'react-router-dom'

export const login =
  (formData: Object, router: NavigateFunction) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: START_LOADING })
      const data = await api.login(formData)
      dispatch({ type: AUTH, data })

      router('/')
    } catch (error: any) {
      console.log(error)
      const message = error.response?.data ? error.response.data : error.message
      dispatch({
        type: AUTH_FAIL,
        payload: message
      })
    }
  }

// export const register = (formData, router) => async (dispatch) => {
//   try {
//     const { data } = await api.register(formData)
//     console.log(data)

//     dispatch({ type: AUTH, data })

//     router('/detail_infor')
//   } catch (errors) {
//     const message = errors.response?.data
//       ? errors.response.data
//       : errors.message
//     console.log(errors)
//     dispatch({
//       type: AUTH_FAIL,
//       payload: message,
//     })
//   }
// }

// export const logout = (router) => async (dispatch) => {
//   try {
//     dispatch({ type: LOGOUT })

//     router('/login')
//   } catch (error) {
//     console.error(error)
//   }
// }
