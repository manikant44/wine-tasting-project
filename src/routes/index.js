import React, { Fragment } from "react"
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect"
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper"
import { Switch, Route } from "react-router-dom"
import AynscNotFound from "./AynscNotFound"
import features from "features"
import PrivateRoutes from "./PrivateRoutes"
import privateRoutes from "./PrivateRoutes/userRoutes";

//
// Adds auth redirecting
// See reacr-auth-wrapper tutorial
// https://mjrussell.github.io/redux-auth-wrapper/docs/Getting-Started/ReactRouter4.html
//
const userIsAuthenticated = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: "/login",
  // If selector is true, wrapper will not redirect
  // For example let's check that state contains user data
  authenticatedSelector: features.login.selectors.selectIsLoggedIn()
})

// For ?redirect=... parsing
const locationHelper = locationHelperBuilder({})

const userIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one
  // or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) ||"secure/vendors",
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
  // If selector is true, wrapper will not redirect
  // So if there is no user data, then we show the page
  authenticatedSelector: features.login.selectors.selectIsNotLoggedIn()
})

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact strict path="/" component={features.landing.pages.Landing} />
      <Route
        exact
        strict
        path="/login"
        // Redirect to secure home page if user is already logged in
        component={userIsNotAuthenticated(features.login.pages.Login)}
      />
       <Route
        exact
        strict
        path="/signup"
        // Redirect to secure home page if user is already logged in
        component={userIsNotAuthenticated(features.signup.pages.Signup)}
      />
      <Route
        path="/secure"
        // Redirect to login page if user is not logged in
        component={userIsAuthenticated(PrivateRoutes)}
      />
       <Route
        path="/profile"
        // Redirect to login page if user is not logged in
        component={userIsAuthenticated(PrivateRoutes)}
      />
      <Route component={AynscNotFound} />
    </Switch>
  </Fragment>
)

Routes.propTypes = {}

export default Routes
