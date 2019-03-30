import * as API from "services/API"
import { actions as productsActions } from "./ducks"
import { push } from "react-router-redux"


export const fetchProducts = () => {
  return async dispatch => {
    dispatch(productsActions.fetchProductsRequest())

    try {
      const response = await API.fetchProducts()
      // dispatch(push("/secure/products"))

        console.log("====response",response);
      return dispatch(
        productsActions.fetchProductsSuccess({
          products: response.data,
        })
      )
    } catch (error) {
      return dispatch(productsActions.fetchProductsError())
    }
  }
}


export const fetchUpdateProducts = (id) => {
  console.log("update new id>>>>",id)
  return async dispatch => {
    dispatch(productsActions.fetchProductsRequest())

    try {
      const response = await API.fetchUpdateProducts(id)
       console.log("====response update products",response);
      return dispatch(
        productsActions.fetchProductsSuccess({
          products: response.data,
        })
      )
    } catch (error) {
      return dispatch(productsActions.fetchProductsError())
    }
  }
}
