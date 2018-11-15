import React from 'react'
import {
  observer,
  inject,
} from 'mobx-react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import AppStore from '../../store/appStore'

@inject('appStore') @observer
class TopicList extends React.Component {
  static propTypes = {
    appStore: PropTypes.instanceOf(AppStore).isRequired,
  }

  asyncBootstrap() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.props.appStore.count = 1000
        resolve(true)
      }, 1000)
    })
  }

  componentDidMount() {
    // do somethings
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            This is topList
          </title>
          <meta name="description" content="This is description" />
        </Helmet>
        <div>{this.props.appStore.msg}</div>
      </div>
    )
  }
}

export default TopicList
