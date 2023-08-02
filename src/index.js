import React from 'react';
import ReactDOM from 'react-dom/client';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import App from './App';


import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from '@redux-saga/core';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
axios.defaults.withCredentials = false

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
