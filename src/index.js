import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReduser from './redusers';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import './nullstyle.css'


const store = createStore(rootReduser, applyMiddleware(thunk))

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
