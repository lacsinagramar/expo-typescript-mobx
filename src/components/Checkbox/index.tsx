import React, { ComponentProps } from 'react'
import RNCheckbox from '@react-native-community/checkbox'

interface CheckboxProps {
  color: string
}

const Checkbox = ({
  color,
  ...rest
}: ComponentProps<typeof RNCheckbox> & CheckboxProps) => {
  return (
    <RNCheckbox
      tintColor={color}
      tintColors={{ true: color }}
      {...rest}
    />
  )
}

export default Checkbox
