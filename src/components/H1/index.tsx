import React, { ReactNode } from 'react'

import { StyledText } from './components'

interface H1Props {
  children: ReactNode
}

const H1 = ({ children }: H1Props) => {
  return <StyledText>{children}</StyledText>
}

export default H1
