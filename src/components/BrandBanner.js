// @flow

import * as React from 'react'
import styled from 'styled-components'
import Brand from './Brand'
import type { BrandsType } from '../Types'

interface BrandBannerType extends BrandsType{
  onButtonClick: Function
}

const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: maroon;
  background-color: ghostwhite
`

const BrandContainer = styled.div`
  padding: 4em;
  background: maroon;
`

const BrandList = styled.div`
  display: flex;
  flex-direction: row
  flex-wrap: wrap;
  padding: 4em;
  background: ghostwhite;
`

const BrandBanner = ({brands, onButtonClick}: BrandBannerType) => (
  <BrandContainer>
    <div>
      <Button onClick={(event: Event) => {onButtonClick()}}>Click!</Button>
    </div>
    <BrandList>
      {brands.map(myBrand =>
        <Brand key={myBrand.index} name={myBrand.name} imageLocation={myBrand.imageLocation} />
      )}
    </BrandList>
  </BrandContainer>
)

export default BrandBanner
