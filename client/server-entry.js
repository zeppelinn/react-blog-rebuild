import React from 'react'
import {
  StaticRouter
} from 'react-router-dom'
import {
  Provider,
  useStaticRendering
} from 'mobx-react'
import App from './views/App'
import {
  createStoreMap
} from './store/store'

// mobx采用静态渲染策略
// 让mobx不会在渲染服务端过程中再次被渲染
useStaticRendering(true)

// 从外部传入store而不是创建store 这样就避免了在渲染新页面时修改其他数据的问题
export default (stores, routerContext, url) => (
  <Provider {...stores} >
    <StaticRouter context={routerContext} location={url} >
      <App />
    </StaticRouter>
  </Provider>
)

export { createStoreMap }
