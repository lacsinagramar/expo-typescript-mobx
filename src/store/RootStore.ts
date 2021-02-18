import { createContext } from 'react'
import { ToDoStore } from './ToDoStore'

export class RootStore {
  toDoStore: ToDoStore = new ToDoStore()
}

export const RootStoreContext = createContext(new RootStore())
