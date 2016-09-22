import firebase from 'firebase';
import {
    FIREBASE_CONFIG
} from '../config';
import LocalStorageTools from './localstorage';

const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
const firebaseAuth = firebaseApp.auth();
const firebaseDb = firebaseApp.database();
const lazyLoadingCount = 10;

class FireBaseTools {

    static getEntities(loadCount) {
      return new Promise((resolve, reject) => {
        let fetchEntitiesFromBackend = function(){
          let startAt = loadCount*lazyLoadingCount;
          let endAt = loadCount*lazyLoadingCount+lazyLoadingCount-1;
          firebaseDb.ref('entities').orderByKey().startAt(startAt.toString()).endAt(endAt.toString()).on("value",function(data){
            let entities = data.val();
            LocalStorageTools.storeEntitiesLocally(entities).then(function(allEntities){
              resolve(allEntities);
            }, function(error){
              console.error(error);
            }).catch(function(error){
              console.log("Error while caching backend data.");
              console.error(error);
            });
          });
        };
        LocalStorageTools.currentEntitiesPromise().then(function(entities){resolve(entities)}, fetchEntitiesFromBackend).catch(fetchEntitiesFromBackend);
      });

    }

    static getEntityDetails(entityId){
      return new Promise((resolve, reject) => {
        let fetchEntitiesDetailsFromBackend = function(){
          firebaseDb.ref('entityDetails/'+entityId).on("value",function(data){
            let details = data.val();
            LocalStorageTools.storeEntityDetailsLocally(entityId, details).catch(function(error){
              //We have tried to store the entities locally, but the operation failed.
              //The application keeps running (since we have the data anyway) however we log the error in the console (TODO: for now)
              console.log("Error while caching backend data.");
              console.error(error);
            });
            resolve(details);
          });
        };
        LocalStorageTools.getEntityDetailsPromise(entityId).then(function(details){resolve(details)}, fetchEntitiesDetailsFromBackend).catch(fetchEntitiesDetailsFromBackend);
      });
    }

}

export default FireBaseTools;
