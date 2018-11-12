import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line

ReactDOM.hydrate(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const NextApp = require('./App.jsx').default // eslint-disable-line
    ReactDOM.hydrate(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
