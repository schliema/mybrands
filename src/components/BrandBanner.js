// @flow

import * as React from 'react'
import Brand from './Brand'
import type { BrandType } from './Brand'

export type BrandsType = {
  brands: BrandType[]
}

const BrandBanner = ({brands} : BrandsType) => (
  <div className="brandBanner">
    {brands.map(myBrand =>
      <Brand key={myBrand.name} name={myBrand.name} imageLocation={myBrand.imageLocation} />
    )}
  </div>
)

export default BrandBanner
