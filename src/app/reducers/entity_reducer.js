  import {
    FETCH_ENTITIES,
    SET_SELECTED_ENTITY,
    SET_SELECTED_LEVEL,
    SET_SELECTED_CHART,
    SET_FILTER_VALUE
  } from '../actions/types';

  const defaultState = {
    allEntities:null,
    visibleEntities:null,
    selectedEntityDetails:null,
    level:50,
    chartIndex:0,
    filterValue:["characters", "gfs", "beasts"]
  };

  export default function(state = defaultState, action) {
      switch (action.type) {
        case SET_SELECTED_ENTITY:
          return { ...state, selectedEntityDetails: action.payload }
        case FETCH_ENTITIES:
          return { ...state, allEntities: action.payload, visibleEntities: action.payload}
        case SET_SELECTED_LEVEL:
          return { ...state, level: action.payload }
        case SET_SELECTED_CHART:
          return { ...state, chartIndex: action.payload }
        case SET_FILTER_VALUE:
          let newVisibleEntities = state.allEntities.filter((value)=>{
            return action.payload.indexOf(value.type.toLowerCase()+'s')>-1;
          });
          return { ...state, filterValue: action.payload,  visibleEntities: newVisibleEntities}
        default:
          return state;
      }
  }
