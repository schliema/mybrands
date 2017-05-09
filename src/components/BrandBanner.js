// @flow

import * as React from 'react'
import styled from 'styled-components'
import Brand from './Brand'
import type { BrandsType } from '../Types'

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
  align-items: center;
  justify-content: center;
  height: 5em;
  padding: 4em;
  background: ghostwhite;
`

const PendingBox = styled.div`
  align-self: center
`

interface BrandBannerType extends BrandsType{
  onButtonClick: Function
}

const errorMessage = () => (
  <BrandList>
    <div>ERROR!!</div>
  </BrandList>
)

const pendingMessage = () => (
  <BrandList>
    <PendingBox>
      <img height="50" width="50" src='http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_red_512.gif'
           alt='wait'/>
    </PendingBox>
  </BrandList>
)

const BrandBanner = ({brands, pending, error, onButtonClick}: BrandBannerType) => (
  <BrandContainer>
    <div>
      <Button onClick={(event: Event) => {onButtonClick()}}>Click!</Button>
    </div>
    {error ? (errorMessage()) : (
      pending ? (pendingMessage()) : (
          <BrandList>
            {brands.map(myBrand =>
              <Brand key={myBrand.index} name={myBrand.name} imageLocation={myBrand.imageLocation}/>
            )}
          </BrandList>
        )
      )
    }
  </BrandContainer>
)

export default BrandBanner
