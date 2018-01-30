import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import playerReducer from './player_reducer';
import uiReducer from './ui_reducer';
import searchBarReducer from './search_bar_reducers';


const rootReducer = combineReducers({
  errors: errorsReducer,
  entities: entitiesReducer,
  player: playerReducer,
  ui: uiReducer,
  search: searchBarReducer
});

export default rootReducer;
