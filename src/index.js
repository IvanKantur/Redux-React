import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware, compose } from 'redux';
import ReduxApp from "./Redux-App";
import {Provider} from "react-redux";
import reducer from './reducers';
import { logging} from "./middlewares/logging";

// const initialState = {
//     libraries : ['redux', 'react'],
//     frameworks : [ 'angular' ]
// }
const store = createStore(reducer, compose(applyMiddleware(logging), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));
// const testButton = document.querySelector('.testButton');
// const items = document.querySelector('.testUl');
// const inputValue = document.querySelector('.testInput');
//
// store.subscribe(() => {
//     // console.log('subscribe', store.getState())
//     items.innerHTML = '';
//     inputValue.value = '';
//
//     store.getState().map(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         items.appendChild(li);
//     });
// });
//
// testButton.addEventListener('click', () => {
//     console.log('INPUT', inputValue.value);
//     store.dispatch({ type: 'WRITE', payload: inputValue.value });
// });

ReactDOM.render(
    <Provider store={store}>
        <ReduxApp />

    </Provider>,
    document.getElementById('root'));