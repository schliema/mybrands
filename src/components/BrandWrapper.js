// @flow

import * as React from 'react'
import styled from 'styled-components'
import type { BrandType } from '../Types'
import Brand from './Brand'
import PageContainer from './PageContainer'
import MainWrapper from './MainWrapper'
import PendingBox from './PendingBox'

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
        <PageContainer>
          <MainWrapper>
            <Brand {...this.props.currentbrand}/>
          </MainWrapper>
        </PageContainer>
      )
    } else {
      return (
        <PageContainer>
          <MainWrapper>
            <PendingBox/>
          </MainWrapper>
        </PageContainer>
      )
    }
  }
}

export default BrandWrapper