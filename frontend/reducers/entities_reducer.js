import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import albumReducer from './album_reducer';
import playlistReducer from './playlist_reducer';
import songReducer from './song_reducer';

const entitiesReducer = combineReducers({
  session: sessionReducer,
  albums: albumReducer,
  playlists: playlistReducer,
  song: songReducer
});

export default entitiesReducer;
