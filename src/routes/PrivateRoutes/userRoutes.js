import React from "react"
import ErrorBoundary from "base_components/ErrorBoundary"
import features from "features"

const privateRoutes = [
  {
    path: "/secure/vendors",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the files page." >
        <features.vendors.pages.Vendors {...props} />
      </ErrorBoundary>

    )
  },

  {
    path: "/secure/add-vendors",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the files page." >
        <features.addVendors.pages.AddVendors {...props} />
      </ErrorBoundary>

    )
  },

  {
    path: "/secure/products",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the files page." >
        <features.products.pages.Products {...props} />
      </ErrorBoundary>

    )
  },

  {
    path: "/secure/add-products",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the files page." >
        <features.addProducts.pages.AddProducts {...props} />
      </ErrorBoundary>

    )
  },

  {
    path: "/secure/profile",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the files page." >
        <features.profile.pages.Profile {...props} />
      </ErrorBoundary>

    )
  }

]

export default privateRoutes
