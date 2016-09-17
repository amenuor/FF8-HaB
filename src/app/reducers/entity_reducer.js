  import {
    FETCH_ENTITIES,
    SET_ENTITY_SELECTED
  } from '../actions/types';

  export default function(state = {entities:null, selectedEntityDetails:null}, action) {
      switch (action.type) {
        case SET_ENTITY_SELECTED:
          return { ...state, selectedEntityDetails: action.payload }
        case FETCH_ENTITIES:
          return { ...state, entities: action.payload }
        default:
          return state;
      }
  }
