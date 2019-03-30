import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // SIGN UP
  //
  SIGNUP_REQUEST: "winetasting/SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "winetasting/SIGNUP_SUCCESS",
  SIGNUP_ERROR: "winetasting/SIGNUP_ERROR"
}

const initialState = Immutable({
  isPendingSignup: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // SIGN UP
    //
    case types.SIGNUP_REQUEST:
      return state.merge({
        isPendingSignup: true
      })
    case types.SIGNUP_SUCCESS:
      return state.merge({
        isPendingSignup: false
      })
    case types.SIGNUP_ERROR:
      return state.merge({
        isPendingSignup: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // SIGNUP
  //
  signupRequest: () => ({
    type: types.SIGNUP_REQUEST
  }),
  signupSuccess: () => ({
    type: types.SIGNUP_SUCCESS
  }),
  signupError: () => ({
    type: types.SIGNUP_ERROR
  })
}

// Selectors
const signupSelector = () => state => state.signup

const selectIsPendingSignup = () =>
  createSelector(
    signupSelector(),
    signup => signup.isPendingSignup
  )

export const selectors = {
  selectIsPendingSignup
}
