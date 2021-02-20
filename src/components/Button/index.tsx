import React, { ComponentProps, ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

import { StyledTouchable } from './components'

interface ButtonProps {
  children: ReactNode
  variant?: string
}

const Button = ({
  children,
  variant,
  ...rest
}: ComponentProps<typeof TouchableOpacity> & ButtonProps) => {
  return (
    <StyledTouchable variant={variant} {...rest}>
      {children}
    </StyledTouchable>
  )
}

Button.propTypes = {}

export default Button
