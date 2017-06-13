import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<ToDoList />, document.getElementById('root'));
registerServiceWorker();
