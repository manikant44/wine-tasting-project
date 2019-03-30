import * as API from "services/API"
import { actions as addActions } from "./ducks"
import { push } from "react-router-redux"

export const addVendors = ({ name, email, address1, address2, city, country }) => {
  return async dispatch => {
    debugger
    dispatch(addActions.AddRequest())
    try {
      const {data} = await API.addVendors({ name, email, address1, address2, city, country })
      // Redirect to vendors page
      dispatch(push("/secure/vendors"))
      return dispatch(addActions.AddSuccess({ data }))
    } catch (error) {
      return dispatch(addActions.AddError())
    }
  }
}
