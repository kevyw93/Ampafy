import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {login, signup, logout} from './util/session_api_util';
import Root from "./components/root";
import {getAllAlbums, getAlbum} from './util/album_api_util';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else {
    store = configureStore();
  }
  window.store = store;
  window.getAlbum = getAlbum;
  window.getAllAlbums = getAllAlbums;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
