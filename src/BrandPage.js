// @flow

import * as React from 'react'
import VisibleBrandWrapper from './containers/VisibleBrandWrapper'

const BrandPage = ({match}: any) => (
  <div>
    <VisibleBrandWrapper brand={match.params.brand}/>
  </div>
)


export default BrandPage;
