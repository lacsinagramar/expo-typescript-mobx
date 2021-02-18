import { action, makeObservable, observable } from 'mobx'

export interface ToDo {
  id: number
  description: string
  isComplete: boolean
}

export class ToDoStore {
  todos: ToDo[] = [
    {
      id: 1,
      description: 'To do 1',
      isComplete: false
    }
  ]

  constructor() {
    makeObservable(this, {
      todos: observable,
      addToDo: action
    })
  }

  addToDo = (description: string) => {
    const toDoItem: ToDo = {
      id: this.todos.length + 1,
      description,
      isComplete: false
    }
    this.todos.push(toDoItem)
  }
}
