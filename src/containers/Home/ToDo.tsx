import React from 'react'

import { $primary } from '../../utils/colors'

import Checkbox from '../../components/Checkbox'
import Paragraph from '../../components/Paragraph'

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
