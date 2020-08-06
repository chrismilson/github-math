import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui'
import { Provider } from 'react-redux'
import store from './state/store'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
