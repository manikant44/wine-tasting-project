import React from "react"
import { Link } from "react-router-dom"

import Box from "base_components/Box";

const NotFound = () => (
  <Box>
    <h4>Page Not Found</h4>
    <div>Sorry, this page not found.</div>
    <div>
      Try to go <Link to="/">home</Link> and find the page you need again.
    </div>
  </Box>
)

export default NotFound