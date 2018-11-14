import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'mobx-react'
import App from './views/App'
import AppStore from './store/appStore'

const initialState = window.__INITIAL__STATE__ || {}

const root = document.getElementById('root')

const render = Component => {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider appStore={new AppStore(initialState.appStore)} >
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default
    render(NextApp)
  })
}
