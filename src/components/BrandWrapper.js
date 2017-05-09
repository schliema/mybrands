// @flow

import * as React from 'react'
import styled from 'styled-components'
import type { BrandType } from '../Types'
import Brand from './Brand'

class BrandWrapper extends React.Component {

  componentDidMount() {
    if ((!this.props.currentbrand && this.props.brand) ||
        (this.props.currentbrand && this.props.brand && this.props.currentbrand.name != this.props.brand)) {
      this.props.load(this.props.brand)
    }
  }

  render() {
    if (this.props.currentbrand && this.props.currentbrand.name == this.props.brand) {
      return (
        <Brand {...this.props.currentbrand}/>
      )
    } else {
      return (
        <img height="50" width="50" src='http://www.mytreedb.com/uploads/mytreedb/loader/ajax_loader_red_512.gif'
           alt='wait'/>
      )
    }
  }
}

export default BrandWrapper