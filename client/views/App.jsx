import React from 'react'
import {
  Link,
} from 'react-router-dom'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {
    // TODO
  }

  render() {
    return [
      <div>
        <Link to="/" key="/" >首页</Link>
        <br />
        <Link to="/detail" key="/detail" >详情页</Link>
      </div>,
      <Routes />,
    ]
  }
}
