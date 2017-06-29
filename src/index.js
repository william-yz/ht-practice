import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// import App from './App';
// import TodoList from './TodoList';
import Demo from './Demo';

import TodoList from './newTodo';
import TodoApp from './reducers';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(TodoApp)



ReactDOM.render(
    <Provider store={store}>
        <TodoList />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
