// @flow

import {connect} from 'react-redux'
import BrandBanner from '../components/BrandBanner'
import type { BrandsType } from '../components/BrandBanner'

const mapStateToProps = (state: BrandsType) => {
  return {
    brands: state.brands
  }
}

const VisibleBrandBanner = connect(
  mapStateToProps,
  undefined
)(BrandBanner)

export default VisibleBrandBanner