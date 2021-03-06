import { injectable } from 'inversify'
import { action, makeObservable, observable } from 'mobx'

export interface ToDo {
  id: number
  description: string
  isComplete: boolean
}

@injectable()
export class ToDoStore {
  todos: ToDo[] = [
    {
      id: 1,
      description: 'Default To Do',
      isComplete: false
    }
  ]

  constructor() {
    makeObservable(this, {
      todos: observable,
      addToDo: action,
      toggleToDo: action
    })
  }

  addToDo = (toDoItem: ToDo) => {
    this.todos.push(toDoItem)
  }

  toggleToDo = (toDoIndex: number) => {
    this.todos[toDoIndex].isComplete = !this.todos[toDoIndex]
      .isComplete
  }
}
