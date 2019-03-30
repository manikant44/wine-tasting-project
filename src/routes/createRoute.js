import React from "react"
import { Route } from "react-router-dom"
import { isNil } from "ramda"

/**
 * Function which create a route based on the passed route info.
 * @param{Object} route
 * @return{Object} Route component
 */
const createRoute = (route, index, wrapper) => (
  <Route
    key={`route-${index}`}
    path={route.path}
    exact={route.exact}
    strict={route.strict}
    component={
      !isNil(route.AsyncComponent)
        ? wrapper
          ? wrapper(route.AsyncComponent)
          : route.AsyncComponent
        : null
    }
  />
)

export default createRoute
