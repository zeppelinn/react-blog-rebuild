import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import TopicList from '../views/topic-list'
import TopicDetail from '../views/topic-detail'

export default () => [
  <Route exact path="/" render={() => <Redirect to="/list" key="/" />} />,
  <Route path="/list" component={TopicList} key="/list"  />,
  <Route path="/detail" component={TopicDetail} key="/detail"  />,
]
