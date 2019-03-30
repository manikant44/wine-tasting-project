import React from "react"
import styled from "styled-components"
import { OrbitSpinner } from "react-epic-spinners"

const Loading = styled(({ className }) => (
  <div className={className}>
    <OrbitSpinner color="#0d90e0" />
  </div>
))`
  display: flex;
  justify-content: center;
  margin: 10px;
`

export default Loading
