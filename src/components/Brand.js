// @flow

import * as React from 'react'
import styled from 'styled-components'
import type { BrandType } from '../Types'

const Brand = ({name, imageLocation}: BrandType) => (
  <BrandItem>
    <img src={imageLocation} alt={name}/>
  </BrandItem>
)

const BrandItem = styled.div`
  padding: 1em;
`

export default Brand