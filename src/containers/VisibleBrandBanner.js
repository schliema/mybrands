// @flow

import {connect} from 'react-redux'
import {getBrands} from '../actions'
import BrandBanner from '../components/BrandBanner'
import type { BrandsType } from '../Types'

const mapStateToProps = (state: BrandsType) => {
  return {
    brands: state.brands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => {
      dispatch(getBrands())
    }
  }
}

const VisibleBrandBanner = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandBanner)

export default VisibleBrandBanner