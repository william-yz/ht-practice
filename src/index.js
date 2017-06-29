import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './TodoList';
import Demo from './Demo';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
