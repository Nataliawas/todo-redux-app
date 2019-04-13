import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import App from './App';
import todoReducer from './store/todo'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'



const reducer = combineReducers({
    myTodoReducer: todoReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
reducer,
composeEnhancers(
           applyMiddleware([thunk])
      )
)
window.dispatch = store.dispatch


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

