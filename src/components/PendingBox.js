import * as React from 'react'
import styled from 'styled-components'

const StyledPendingBox = styled.div`
  align-self: center
`

const PendingBox = () => (
  <StyledPendingBox>
      <img height="50" width="50" src='http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_red_512.gif'
         alt='wait'/>
  </StyledPendingBox>
)

export default PendingBox