import { action, makeObservable, observable } from 'mobx'

export class UserInfoStore {
  firstName: string = ''
  lastName: string = ''

  constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      updateUserInfo: action
    })
  }

  updateUserInfo = (userInfo: {
    firstName: string
    lastName: string
  }) => {
    this.firstName = userInfo.firstName
    this.lastName = userInfo.lastName
  }
}
