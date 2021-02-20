import React, { ComponentProps } from 'react'
import { TextInput as RNTextInput } from 'react-native'

import { StyledInput } from './components'

interface TextInputProps {
  removeMargin?: boolean
}

const TextInput = ({
  removeMargin,
  ...rest
}: ComponentProps<typeof RNTextInput> & TextInputProps) => {
  return <StyledInput removeMargin={removeMargin} {...rest} />
}

export default TextInput
