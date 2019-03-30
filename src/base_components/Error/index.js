import React from "react"

import Box from "base_components/Box"

const Error = ({ children }) => {
  const headlineStyle = {
    fontSize: "1.2rem",
    textAlign: "center",
    fontFamily: "Avenir Next",
    fontWeight: 500
  }

  return (
    <Box>
        <h3 style={headlineStyle}>{children}</h3>
        <h3
          style={{
            ...headlineStyle,
            marginTop: "2em",
            fontSize: "1.5rem"
          }}
        >
          {children}
        </h3>
    </Box>
  )
}

export default Error
