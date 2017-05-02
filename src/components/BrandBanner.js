// @flow

import React from 'react'
import Brand from './Brand'

const BrandBanner = (props: {brands:[{name: string, imageLocation: string}]}) => (
  <div className="brandBanner">
    {props.brands.map(myBrand =>
      <Brand name={myBrand.name} imageLocation={myBrand.imageLocation} />
    )}
  </div>
)

export default BrandBanner
