import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Switch, Route } from "react-router-dom"
import AsyncNotFound from "../AynscNotFound"
import createRoute from "../createRoute"
import userRoutes from "./userRoutes"

/* create our async component in here
 * this will optimize the loading of components of our app
 * dynamically importing our scenes here */

const PrivateRoutes = ({ location }) => (
  <Fragment>
    {/* Displaying the Navbar and Sidebar */}
    {/* TODO Replace AsyncNavBar and Main with parameters in createRoute functions as options like { sidebar: false, navbar: true })  */}
    <Route path="/secure"  />
    {/* Minor optional padding for sidebar*/}
      {/* Routes that app uses */}
      <Switch>
        {userRoutes.map((route, index) => createRoute(route, index))}
        <Route component={AsyncNotFound} />
      </Switch>
  </Fragment>
)

PrivateRoutes.propTypes = {
  location: PropTypes.object.isRequired
}

export default PrivateRoutes
