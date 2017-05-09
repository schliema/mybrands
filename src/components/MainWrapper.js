import * as React from 'react'
import styled from 'styled-components'

const MyDiv = styled.div`
  display: flex;
  flex-direction: row
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 5em;
  padding: 1em;
  background: maroon;
`

const MainWrapper = ({children}) => (
  <MyDiv>
    {children}
  </MyDiv>
)

export default MainWrapper