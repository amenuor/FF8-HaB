  import {
    FETCH_ENTITIES,
    SET_ENTITY_SELECTED,
    SET_LEVEL_SELECTED
  } from '../actions/types';

  export default function(state = {entities:null, selectedEntityDetails:null, level:50}, action) {
      switch (action.type) {
        case SET_ENTITY_SELECTED:
          return { ...state, selectedEntityDetails: action.payload }
        case FETCH_ENTITIES:
          return { ...state, entities: action.payload }
        case SET_LEVEL_SELECTED:
          return { ...state, level: action.payload }
        default:
          return state;
      }
  }
