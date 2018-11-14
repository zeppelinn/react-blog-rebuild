import {
  observable,
  computed,
  autorun,
  action,
} from 'mobx'

export default class AppStore {
  @observable count = 0

  @observable name = 'cortezx'

  @computed get msg() {
    return `${this.name}'s count is ${this.count}` //eslint-disable-line
  }

  @action add() {
    this.count += 1
  }
}
