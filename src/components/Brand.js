// @flow

import React from 'react'


const Brand = (props: {name: string, imageLocation: string}) => (
  <div className="brand">
    <img src={props.imageLocation} alt={props.name}/>
  </div>
)

export default Brand