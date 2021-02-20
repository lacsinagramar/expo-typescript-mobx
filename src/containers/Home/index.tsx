import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { View } from 'react-native'

import { RootStoreContext } from '../../store/RootStore'
import { ToDo as ToDoInterface } from '../../store/ToDoStore'

import { $white } from '../../utils/colors'

import PageWrapper from '../../components/PageWrapper'
import H1 from '../../components/H1'
import Paragraph from '../../components/Paragraph'

import ToDo from './ToDo'
import {
  AddToDoButton,
  AddToDoInput,
  AddToDoWrapper
} from './components'

const Home = observer(() => {
  const { toDoStore, userInfoStore } = useContext(
    RootStoreContext
  )
  const { todos, addToDo, toggleToDo } = toDoStore
  const { firstName, lastName } = userInfoStore

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
        {todos.map((todo: ToDoInterface) => (
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
