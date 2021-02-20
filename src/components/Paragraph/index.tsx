import React, { ReactNode } from 'react'

import { StyledText } from './components'

interface ParagraphProps {
  children: ReactNode
  removeMargin?: boolean
  textColor?: string
  fontSize?: number
  fontWeight?: 'normal' | 'bold'
}

const Paragraph = ({
  children,
  removeMargin = true,
  textColor,
  fontSize,
  fontWeight
}: ParagraphProps) => {
  return (
    <StyledText
      removeMargin={removeMargin}
      textColor={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </StyledText>
  )
}

export default Paragraph
