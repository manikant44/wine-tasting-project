import * as API from "services/API"
import { actions as vendorActions } from "./ducks"

export const fetchVendors = () => {
  return async dispatch => {
    dispatch(vendorActions.fetchVendorsRequest())

    try {
      const response = await API.fetchVendors()
        console.log("====response",response);
      return dispatch(
        vendorActions.fetchVendorsSuccess({
          vendors: response.data,
        })
      )
    } catch (error) {
      return dispatch(vendorActions.fetchVendorsError())
    }
  }
}

