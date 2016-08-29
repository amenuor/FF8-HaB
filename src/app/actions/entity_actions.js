import FireBaseTools from '../utils/firebase';
import {
  FETCH_ENTITIES,
} from './types';

export function fetchEntities(loadCount){
  const request = FireBaseTools.getEntities(loadCount);
  return {
    type : FETCH_ENTITIES,
    payload : request
  }
}
