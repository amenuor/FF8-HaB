  import {
    FETCH_ENTITIES,
  } from '../actions/types';

  export default function(state = null, action) {
      switch (action.type) {
          case FETCH_ENTITIES:
            console.log(action.payload);
            return action.payload;
          default:
            return state;
      }
  }
