import { inject, injectable } from 'inversify'
import { action, makeObservable } from 'mobx'

import { getRootContainer } from 'src/config/ioc'

import {
  userInfoInterface,
  UserInfoStore
} from 'src/store/UserInfoStore'

import { useClassStore } from 'src/utils/useClassStore'

@injectable()
class LandingScreenPresenter {
  @inject(UserInfoStore) private userInfoStore!: UserInfoStore

  constructor() {
    makeObservable(this, {
      enterApp: action
    })
  }

  public enterApp = (userInfo: userInfoInterface) => {
    this.userInfoStore.updateUserInfo(userInfo)
  }
}

const useLandingScreenPresenter = () =>
  useClassStore<LandingScreenPresenter>(
    getRootContainer().get(LandingScreenPresenter)
  )

export default useLandingScreenPresenter
