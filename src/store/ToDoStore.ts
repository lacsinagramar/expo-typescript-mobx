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

  addToDo = (description: string) => {
    const toDoItem: ToDo = {
      id: this.todos.length + 1,
      description,
      isComplete: false
    }
    this.todos.push(toDoItem)
  }

  toggleToDo = (id: number) => {
    const toDoIndex = this.todos.findIndex(
      todo => todo.id === id
    )
    this.todos[toDoIndex].isComplete = !this.todos[toDoIndex]
      .isComplete
  }
}
