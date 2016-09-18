import FireBaseTools from '../utils/firebase';

import {
  FETCH_ENTITIES,
  SET_ENTITY_SELECTED,
  SET_LEVEL_SELECTED
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
    type : SET_ENTITY_SELECTED,
    payload : request
  }
}

export function setSelectedLevel(level){
  const request = level;
  return {
    type : SET_LEVEL_SELECTED,
    payload : request
  }
}
