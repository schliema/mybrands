// @flow

import * as React from 'react'
import styled from 'styled-components'
import type { BrandType } from '../Types'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'


const Brand = ({name, imageLocation}: BrandType) => {

  const link = '/brand/' + name

  return (
    <BrandItem>
      <Link to={link}>
        <img src={imageLocation} alt={name}/>
      </Link>
    </BrandItem>
  )
}

const BrandItem = styled.div`
  padding: 1em;
`

export default Brand