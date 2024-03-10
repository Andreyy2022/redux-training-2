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

function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const list = document.querySelectorAll('.list')[0];

store.subscribe(() => {
  list.innerHTML = '';
  trackInput.value = '';
  store.getState().forEach(track => {
    const li = document.createElement('li');
    li.textContent = track;
    list.appendChild(li);
  });
});

addTrackBtn.addEventListener('click', () => {
  const trackName = trackInput.value;
  store.dispatch({type: 'ADD_TRACK', payload: trackName});
});