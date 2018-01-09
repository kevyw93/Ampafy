import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {login, signup, logout} from './util/session_api_util';
import {getAlbum, getAllAlbums} from './actions/album_actions';
import Root from "./components/root";
import {fetchArraySongs} from './util/song_api_util';
import {createPlaylist} from './util/playlist_api_util';


document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { entities:{session: {currentUser: window.currentUser}}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else {
    store = configureStore();
  }
  window.store = store;
  window.getAlbum = getAlbum;
  window.fetchArraySongs = fetchArraySongs;
  window.getAllAlbums = getAllAlbums;
  window.createPlaylist = createPlaylist;
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
  // window.audio = document.getElementById('audio');
});
