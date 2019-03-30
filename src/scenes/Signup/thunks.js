import * as API from "services/API"
import { actions as signupActions } from "./ducks"
import { push } from "react-router-redux"

export const signup = ({name, email, password }) => {
  return async dispatch => {
    dispatch(signupActions.signupRequest())

    try {
      await API.signup({name, email, password })
      // Redirect to login page
      dispatch(push("/login"))
      return dispatch(signupActions.signupSuccess())
    } catch (error) {
      return dispatch(signupActions.signupError())
    }
  }
}
