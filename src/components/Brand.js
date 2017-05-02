// @flow

import * as React from 'react'

export type BrandType = {
  name: string,
  imageLocation: string
}

const Brand = ({name, imageLocation}: BrandType) => (
  <div className="brand">
    <img src={imageLocation} alt={name}/>
  </div>
)

export default Brand