  import {
    FETCH_ENTITIES,
    SET_SELECTED_ENTITY,
    SET_SELECTED_LEVEL,
    SET_SELECTED_CHART,
    SET_FILTER_VALUE
  } from '../actions/types';

  export default function(state = {entities:null, selectedEntityDetails:null, level:50, chartIndex:0, filterValue:["characters", "gfs", "beasts"]}, action) {
      switch (action.type) {
        case SET_SELECTED_ENTITY:
          return { ...state, selectedEntityDetails: action.payload }
        case FETCH_ENTITIES:
          return { ...state, entities: action.payload }
        case SET_SELECTED_LEVEL:
          return { ...state, level: action.payload }
        case SET_SELECTED_CHART:
          return { ...state, chartIndex: action.payload }
        case SET_FILTER_VALUE:
          return { ...state, filterValue: action.payload }
        default:
          return state;
      }
  }
