// @flow

import * as React from 'react'
import { render }  from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import promise from 'redux-promise-middleware'
import brandApp from './reducers'
import App from './App'

const loggerMiddleWare = store => next => action => {
  console.log('action: ' + action.type)
  return next(action)
}

const middleWare = [promise(), loggerMiddleWare]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    brandApp,
    composeEnhancers(
      applyMiddleware(...middleWare)
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
