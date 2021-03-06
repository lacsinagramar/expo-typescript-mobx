import React from 'react'

import { $primary } from 'src/utils/colors'

import Checkbox from 'src/components/Checkbox'
import Paragraph from 'src/components/Paragraph'

import { ToDoWrapper } from './components'

interface ToDoProps {
  description: string
  isComplete: boolean
  onCheck(): any
}

const ToDo = ({
  isComplete,
  description,
  onCheck
}: ToDoProps) => {
  return (
    <ToDoWrapper>
      <Checkbox
        value={isComplete}
        color={$primary}
        onValueChange={onCheck}
      />
      <Paragraph fontSize={16}>{description}</Paragraph>
    </ToDoWrapper>
  )
}

export default ToDo
