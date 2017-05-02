import {connect} from 'react-redux'
import BrandBanner from '../components/BrandBanner'

const mapStateToProps = (state) => {
  return {
    brands: state.brands
  }
}

const VisibleBrandBanner = connect(
  mapStateToProps,
  undefined
)(BrandBanner)

export default VisibleBrandBanner