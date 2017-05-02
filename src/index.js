import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import brandApp from './reducers'
import App from './App';
import './index.css';
import './App.css';

const initialState = {
  brands: [
    {
      name: 'bruder',
      imageLocation: 'https://media.kramp.com/kws/bl070/Y2C3bIBgbKJL_EvV_2rX5fCAbFv2bEjq_F_'
    },
    {
      name: 'loctite',
      imageLocation: 'https://media.kramp.com/kws/bl070/Y2C3bIBgbKJL_EvgbKOQmfBDfKlL5K7um2o2'
    },
    {
      name: 'walterscheid',
      imageLocation: 'https://media.kramp.com/kws/bl070/Y2C3bIBgbKJL_Ev8YSlQ5fCGYK3DmSBAbFv2bEjq_F_'
    }]
}

let store = createStore(
  brandApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
