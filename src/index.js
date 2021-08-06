import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import "./ReduxStore/Store";
import myStore from "./ReduxStore/Store";
import { Provider } from 'react-redux';
import axios from 'axios';

export var requestFunction = axios.create()

requestFunction.interceptors.request.use((request)=>{
  // alert("request")
  request.headers["authtoken"] = localStorage.token
  return request
})

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
