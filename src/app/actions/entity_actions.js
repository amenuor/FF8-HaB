import FireBaseTools from '../utils/firebase';

import {
  FETCH_ENTITIES,
  SET_SELECTED_ENTITY,
  SET_SELECTED_LEVEL,
  SET_SELECTED_CHART
} from './types';

export function fetchEntities(loadCount){
  const request = FireBaseTools.getEntities(loadCount);
  return {
    type : FETCH_ENTITIES,
    payload : request
  }
}

export function setSelectedEntity(entityId){
  const request = FireBaseTools.getEntityDetails(entityId);
  return {
    type : SET_SELECTED_ENTITY,
    payload : request
  }
}

export function setSelectedLevel(level){
  const request = level;
  return {
    type : SET_SELECTED_LEVEL,
    payload : request
  }
}

export function setSelectedTab(index){
  const request = index;
  return {
    type : SET_SELECTED_CHART,
    payload : request
  }
}
