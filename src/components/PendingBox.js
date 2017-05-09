import * as React from 'react'
import styled from 'styled-components'

const MyDiv = styled.div`
  align-self: center
`

const PendingBox = () => (
  <MyDiv>
      <img height="50" width="50" src='http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_red_512.gif'
         alt='wait'/>
  </MyDiv>
)

export default PendingBox