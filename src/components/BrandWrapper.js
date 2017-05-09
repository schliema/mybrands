// @flow

import * as React from 'react'
import styled from 'styled-components'
import type { BrandType } from '../Types'
import Brand from './Brand'

class BrandWrapper extends React.Component {

  componentDidMount() {
    if (this.props.brand) {
      this.props.load(this.props.brand)
    }
  }

  render() {
    if (this.props.currentbrand) {
      return (
        <Brand {...this.props.currentbrand}/>
      )
    } else {
      return null
    }
  }
}

export default BrandWrapper