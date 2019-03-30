import React from "react"
import PropTypes from "prop-types"

import Error from "base_components/Error"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <Error>{this.props.errMsg}</Error>
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  errMsg: PropTypes.string.isRequired
}

export default ErrorBoundary
