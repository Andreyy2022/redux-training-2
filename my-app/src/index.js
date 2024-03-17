
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react';
import { createStore } from 'redux';
import './index.css';
import App from './App';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*
import { createStore } from "redux";



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
*/