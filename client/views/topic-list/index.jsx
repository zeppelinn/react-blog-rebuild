import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import AppStore from '../../store/appStore'

@inject('appStore') @observer
class TopicList extends React.Component {
  static propTypes = {
    appStore: PropTypes.instanceOf(AppStore).isRequired,
  }
  componentDidMount() {
    // do somethings
    setInterval(() => {
      this.props.appStore.add()
    }, 1000)
  }

  render() {
    return (
      <div>{this.props.appStore.msg}</div>
    )
  }
}

export default TopicList
