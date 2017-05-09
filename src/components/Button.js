import * as React from 'react'
import styled from 'styled-components'

const MyButton = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: maroon;
  background-color: ghostwhite
`

const Button = (props) => {
  const {children, ...rest} = props;
  return (
    <MyButton {...rest}>
      {children}
    </MyButton>
  )
}

export default Button