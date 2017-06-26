// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import AppReducers from './App/AppReducers';
import App from './App/AppComponents';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import sagas from './saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(AppReducers, applyMiddleware(sagaMiddleware, logger));

sagas.forEach(sagaMiddleware.run)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
