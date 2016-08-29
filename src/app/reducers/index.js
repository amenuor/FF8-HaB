import { combineReducers } from 'redux';
import EntityReducer from './entity_reducer';

const rootReducer = combineReducers({
    entity: EntityReducer,
});

export default rootReducer;
