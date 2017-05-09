// @flow

import * as React from 'react'
import { render }  from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import promise from 'redux-promise-middleware'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import brandApp from './reducers'
import type {ActionType} from './Types'
import App from './App'
import Home from './Home'
import BrandPage from './BrandPage'
import PageWrapper from './components/PageWrapper'
import MainWrapper from './components/MainWrapper'
import Tab from './components/Tab'
import Tabs from './components/Tabs'

const loggerMiddleWare = store => next => action => {
  console.log('action: ' + action.type)
  return next(action)
}

const myPromise = store => next => action => {
  if (action.payload && typeof action.payload.then === 'function') {
    action.payload.then(function(response){

      const fulFill = (response: any) : ActionType => ({
        type: action.type + '_FULFILLED',
        payload: response
      })

      store.dispatch(fulFill(response))
    }).catch(function(response) {

      const reject = (response: any): ActionType => ({
        type: action.type + '_REJECTED',
        payload: response
      })

      store.dispatch(reject(response))
    })
  }
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
    <Router>
      <PageWrapper>
          <Tabs>
            <Tab><Link to='/home'>Home</Link></Tab>
            <Tab><Link to='/brands'>Brands</Link></Tab>
          </Tabs>
          <Route path='/home' component={Home}/>
          <Route path='/brands' component={App}/>
          <Route path='/brand/:brand' component={BrandPage}/>
      </PageWrapper>
    </Router>
  </Provider>,
  document.getElementById('root')
)
