import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import { reducer as toastr } from "react-redux-toastr"

import features from "features"

// this is the root reducers, we will combine all reducers that we are using.
export default combineReducers({
  // landing: features.landing.reducer,
  login:features.login.reducer,
  vendors:features.vendors.reducer,
  products:features.products.reducer,
  signup: features.signup.reducer,
  addvendors: features.addVendors.reducer,
  addproducts: features.addProducts.reducer,
  routing,
  toastr,
})
