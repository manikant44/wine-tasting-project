import * as API from "services/API"
import { actions as loginActions } from "./ducks"
import { push } from "react-router-redux"

export const login = ({ email, password }) => {
  return async dispatch => {
    // debugger
    dispatch(loginActions.loginRequest())

    try {
      const { data } = await API.login({ email, password })
      console.log('======***data',data);
      dispatch(push("/secure/vendors"))
      return dispatch(
        loginActions.loginSuccess({ data })
      )
    } catch (error) {
      return dispatch(loginActions.loginError())
    }
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch(loginActions.logoutRequest())

    try {
      await API.logout()

      return dispatch(loginActions.logoutSuccess())
    } catch (error) {
      return dispatch(loginActions.logoutError())
    } finally {
      // Redirect to start page
      dispatch(push("/login"))
    }
  }
}
