import * as API from "services/API"
import { actions as addActions } from "./ducks"
import { push } from "react-router-redux"

export const addProducts = ( newProduct) => 
  {
    console.log("=====>api",newProduct)
  return async dispatch => {
    debugger
    dispatch(addActions.AddRequest())
    try {
      const { data } = await API.addProducts(newProduct)
      // Redirect to vendors page
      dispatch(push("/secure/products"))
      return dispatch(addActions.AddSuccess({ data }))
    } catch (error) {
      return dispatch(addActions.AddError())
    }
  }
}

export const tanslate = (fields, lang, name) => {
  return async dispatch => {
    dispatch(addActions.AddTranslate())
    try {
      const { data } = await API.translateProducts(fields, lang)
      return dispatch(addActions.TranslateSuccess({ data },name))
    } catch (error) {
      return dispatch(addActions.TranslateError())
    }
  }
}


