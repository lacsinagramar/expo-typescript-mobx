import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { View } from 'react-native'

import { ToDo as ToDoInterface } from 'src/store/ToDoStore'

import { $white } from 'src/utils/colors'

import PageWrapper from 'src/components/PageWrapper'
import H1 from 'src/components/H1'
import Paragraph from 'src/components/Paragraph'

import ToDo from './ToDo'
import {
  AddToDoButton,
  AddToDoInput,
  AddToDoWrapper
} from './components'
import useHomeScreenPresenter from './presenter'

const Home = observer(() => {
  const {
    firstName,
    lastName,
    toDos,
    addToDo,
    toggleToDo
  } = useHomeScreenPresenter()

  const [toDoInputValue, setToDoInputValue] = useState<string>(
    ''
  )

  const addToDoButtonPress = () => {
    const valid = toDoInputValue.length

    if (valid) {
      addToDo(toDoInputValue)
      return setToDoInputValue('')
    }
  }
  return (
    <PageWrapper>
      <View>
        <H1>
          Hi {firstName} {lastName}!
        </H1>
        <AddToDoWrapper>
          <AddToDoInput
            value={toDoInputValue}
            onChangeText={(text: string) =>
              setToDoInputValue(text)
            }
            placeholder="Enter task here..."
          />
          <AddToDoButton onPress={addToDoButtonPress}>
            <Paragraph fontSize={24} textColor={$white}>
              +
            </Paragraph>
          </AddToDoButton>
        </AddToDoWrapper>
        <Paragraph fontSize={18}>
          Here is the list of your tasks:
        </Paragraph>
        {toDos.map((todo: ToDoInterface) => (
          <ToDo
            key={todo.id}
            description={todo.description}
            isComplete={todo.isComplete}
            onCheck={() => toggleToDo(todo.id)}
          />
        ))}
      </View>
    </PageWrapper>
  )
})

export default Home
