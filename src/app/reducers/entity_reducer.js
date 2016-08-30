  import {
    FETCH_ENTITIES,
    SET_ENTITY_SELECTED
  } from '../actions/types';

  export default function(state = null, action) {
      switch (action.type) {
        case SET_ENTITY_SELECTED:
        case FETCH_ENTITIES:
          return action.payload;
        default:
          return state;
      }
  }
