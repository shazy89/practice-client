import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {ActionCableProvider} from 'react-actioncable-provider';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
 // <ActionCableProvider  url={'ws://localhost:3001/cable'}> </ActionCableProvider>
 ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </Provider> , document.getElementById('root'));










