import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import playerReducer from './player_reducer';


const rootReducer = combineReducers({
  errors: errorsReducer,
  entities: entitiesReducer,
  player: playerReducer
});

export default rootReducer;
