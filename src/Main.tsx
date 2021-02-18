import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Button, Text, View } from 'react-native-ui-lib'

import { RootStoreContext } from './store/RootStore'
import { ToDo } from './store/ToDoStore'
import styles from './styles'

const Main = observer(() => {
  const { toDoStore } = useContext(RootStoreContext)
  const { todos, addToDo } = toDoStore
  return (
    <View style={styles.mainContainer}>
      {todos.map((todo: ToDo) => (
        <View key={todo.id}>
          <Text>{todo.description}</Text>
        </View>
      ))}
      <Button onPress={() => addToDo('To Do 2')}>
        <Text>Add Todo</Text>
      </Button>
    </View>
  )
})

export default Main
