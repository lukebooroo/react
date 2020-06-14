import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import getStore from './GetStore';
import {Provider} from 'react-redux';

const store = getStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('AppContainer')
);

store.dispatch({ type: `REQUEST_FETCH_QUESTIONS` });
