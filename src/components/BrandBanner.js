// @flow

import * as React from 'react'
import styled from 'styled-components'
import Brand from './Brand'
import type { BrandsType } from '../Types'
import MainWrapper from './MainWrapper'
import PendingBox from './PendingBox'
import Button from './Button'

interface BrandBannerType extends BrandsType{
  onButtonClick: Function
}

const errorMessage = () => (
  <MainWrapper>
    <div>ERROR!!</div>
  </MainWrapper>
)

const pendingMessage = () => (
  <MainWrapper>
      <PendingBox/>
  </MainWrapper>
)

const BrandBanner = ({brands, pending, error, onButtonClick}: BrandBannerType) => (
  <div>
    <MainWrapper>
      <Button onClick={(event: Event) => {onButtonClick()}}>Click!</Button>
    </MainWrapper>
    {error ? (errorMessage()) : (
      pending ? (pendingMessage()) : (
          <MainWrapper>
            {brands.map(myBrand =>
              <Brand key={myBrand.index} name={myBrand.name} imageLocation={myBrand.imageLocation}/>
            )}
          </MainWrapper>
        )
      )
    }
  </div>
)

export default BrandBanner
