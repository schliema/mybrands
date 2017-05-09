import * as React from 'react'
import styled from 'styled-components'

const myDiv = styled.div`
  padding: 4em;
  background: maroon;
`

const PageContainer = ({children}) => (
  <myDiv>
    {children}
  </myDiv>
)

export default PageContainer