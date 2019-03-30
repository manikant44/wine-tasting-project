import React from "react"
import { Link } from "react-router-dom"

import Box from "base_components/Box"

const FeatureDisabled = ({ name }) => (
  <Box>
    <h4>You have no access to {name ? `feature "${name}"` : "this feature"}</h4>
    <div>
      Try to go <Link to="/">home</Link> and ask support to get access to this
      feature.
    </div>
  </Box>
)

export default FeatureDisabled
