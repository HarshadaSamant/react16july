import { createStore, combineReducers, applyMiddleware } from "redux";
import {React, Angular, AuthReducer, ApiLoad, CartReducer, OrderReducer} from './Reducers';
import thunk from "redux-thunk"
import createSaga from "redux-saga"
// import RootSaga from "./sagas";

// var sagaMiddleware = createSaga();

var reducers = combineReducers({React, Angular, AuthReducer, ApiLoad, CartReducer, OrderReducer})

var store = createStore(reducers, applyMiddleware( thunk))

// sagaMiddleware.run(RootSaga);

// dispatch function passes two arguments 1. type and 2.action to reducers.

// this will watch for action requests
// store.subscribe(() => {
//     console.log("I will be called everytime store altered", store.getState())
// })

// action which requests for books for eact angular and react
store.dispatch({
    type: "Books"
})

// action which requests for Project topics for eact angular and react
store.dispatch({
    type: "Project_Topics"
})


// action which requests for material which is not present in store (returns default case)
store.dispatch({
    type: "Study_Material"
})

// getState will return current state of store(object)
var storeData = store.getState();

// console.log(storeData);



export default store;