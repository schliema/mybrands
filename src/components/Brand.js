// @flow

import * as React from 'react'
import styled from 'styled-components'
import type { BrandType } from '../Types'

const BrandItem = styled.div`
  padding: 1em;
  flex-grow: 1;
`

const Brand = ({name, imageLocation}: BrandType) => (
  <BrandItem>
    <img src={imageLocation} alt={name}/>
  </BrandItem>
)

export default Brand