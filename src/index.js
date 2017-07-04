import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
// import App from './App';
// import TodoList from './TodoList';
import Demo from './Demo';

import TodoList from './newTodo';
import TodoApp from './reducer';

import sagas from './sagas'

import registerServiceWorker from './registerServiceWorker';
import './index.css';
const sagaMiddleware = createSagaMiddleware()

let store = createStore(TodoApp, applyMiddleware(logger, sagaMiddleware))
sagas.forEach(sagaMiddleware.run)


ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
