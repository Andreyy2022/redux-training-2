/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
*/

import { createStore } from "redux";

function playlist(state = []) {
  return state;
}

const store = createStore(playlist);

store.subscribe(() => {
  console.log('subscribe', store.getState());
});

store.dispatch({type: 'ADD_TRACK', payload: 'Smell like spirit'});