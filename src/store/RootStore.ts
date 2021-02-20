import { createContext } from 'react'
import { ToDoStore } from './ToDoStore'
import { UserInfoStore } from './UserInfoStore'

export class RootStore {
  toDoStore: ToDoStore = new ToDoStore()
  userInfoStore: UserInfoStore = new UserInfoStore()
}

export const RootStoreContext = createContext(new RootStore())
