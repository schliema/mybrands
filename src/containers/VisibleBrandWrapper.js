// @flow

import {connect} from 'react-redux'
import {getOneBrand} from '../actions'
import BrandWrapper from '../components/BrandWrapper'
import type { BrandsType } from '../Types'

const mapStateToProps = (state: BrandsType) => {
  return {
    currentbrand: state.brands.currentbrand
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: (brand) => {
      dispatch(getOneBrand(brand))
    }
  }
}

const VisibleBrandWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrandWrapper)

export default VisibleBrandWrapper