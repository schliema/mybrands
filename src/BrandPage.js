// @flow

import * as React from 'react'
import type {BrandType} from './Types'
import VisibleBrandWrapper from './containers/VisibleBrandWrapper'

const BrandPage = ({match}: any) => (
  <div>
    <h1>{match.params.brand}</h1>
    <VisibleBrandWrapper brand={match.params.brand}/>
  </div>
)


export default BrandPage;
