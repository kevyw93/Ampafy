import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import albumReducer from './album_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  albums: albumReducer
});

export default rootReducer;
