import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Text, Layout } from '@ui-kitten/components'

import { RootStoreContext } from './store/RootStore'
import { ToDo } from './store/ToDoStore'

import PageWrapper from './components/PageWrapper'

import styles from './styles'

const Main = observer(() => {
  const { toDoStore } = useContext(RootStoreContext)
  const { todos, addToDo } = toDoStore
  return (
    <PageWrapper pageTitle="To Do">
      {todos.map((todo: ToDo) => (
        <Layout key={todo.id}>
          <Text>{todo.description}</Text>
        </Layout>
      ))}
      <Button onPress={() => addToDo('To Do 2')}>
        Add Todo
      </Button>
    </PageWrapper>
  )
})

export default Main
