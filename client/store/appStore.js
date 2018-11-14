import {
  observable,
  computed,
  autorun,
  action,
} from 'mobx'

export default class AppStore {

  constructor({count, name} = {count: 0, name:'cortezx'}){
    this.count = count
    this.name = name
  }

  @observable count

  @observable name

  @computed get msg() {
    return `${this.name}'s count is ${this.count}` //eslint-disable-line
  }

  @action add() {
    this.count += 1
  }

  toJson() {
    return {
      count: this.count,
      name: this.name
    }
  }
}
