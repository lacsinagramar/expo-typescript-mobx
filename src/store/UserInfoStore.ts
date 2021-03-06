import { injectable } from 'inversify'
import { action, makeObservable, observable } from 'mobx'

export interface userInfoInterface {
  firstName: string
  lastName: string
}

@injectable()
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

  updateUserInfo = (userInfo: userInfoInterface) => {
    this.firstName = userInfo.firstName
    this.lastName = userInfo.lastName
  }
}
