import FireBaseTools from '../utils/firebase';
import {
  FETCH_ENTITIES,
  SET_ENTITY_SELECTED
} from './types';

export function fetchEntities(loadCount){
  const request = FireBaseTools.getEntities(loadCount);
  return {
    type : FETCH_ENTITIES,
    payload : request
  }
}

export function setEntitySelected(entityId){
  const request = FireBaseTools.getEntityDetails(entityId);
  return {
    type : SET_ENTITY_SELECTED,
    payload : request
  }
}