import { inject, injectable } from 'inversify'
import { action, computed, makeObservable } from 'mobx'

import { getRootContainer } from 'src/config/ioc'

import { ToDoStore } from 'src/store/ToDoStore'
import { UserInfoStore } from 'src/store/UserInfoStore'

import { useClassStore } from 'src/utils/useClassStore'

@injectable()
class HomeScreenPresenter {
  @inject(ToDoStore) private toDoStore!: ToDoStore
  @inject(UserInfoStore) private userInfoStore!: UserInfoStore

  constructor() {
    makeObservable(this, {
      firstName: computed,
      lastName: computed,
      toDos: computed,
      numberOfToDos: computed,
      addToDo: action,
      toggleToDo: action
    })
  }

  public get firstName() {
    return this.userInfoStore.firstName
  }

  public get lastName() {
    return this.userInfoStore.lastName
  }

  public get toDos() {
    return this.toDoStore.todos
  }

  public get numberOfToDos() {
    return this.toDoStore.todos.length
  }

  public addToDo = (description: string) => {
    const toDo = {
      id: this.numberOfToDos + 1,
      description,
      isComplete: false
    }
    this.toDoStore.addToDo(toDo)
  }

  public toggleToDo = (id: number) => {
    const toDoIndex = this.toDos.findIndex(
      todo => todo.id === id
    )
    this.toDoStore.toggleToDo(toDoIndex)
  }
}

const useHomeScreenPresenter = () =>
  useClassStore<HomeScreenPresenter>(
    getRootContainer().get(HomeScreenPresenter)
  )

export default useHomeScreenPresenter
