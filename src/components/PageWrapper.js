import * as React from 'react'
import styled from 'styled-components'

const myDiv = styled.div`
  padding: 4em;
  background: maroon;
`

const PageWrapper = ({children}) => (
  <myDiv>
    {children}
  </myDiv>
)

export default PageWrapper