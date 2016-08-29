import 'firebase'
import {
    FIREBASE_CONFIG
} from '../config';
import {
    currentEntitiesPromise,
    storeEntitiesLocally
} from './localstorage';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
const lazyLoadingCount = 10;

var FireBaseTools = {

    getEntities: (loadCount, callback) => {

      return new Promise((resolve, reject) => {
        let fetchEntitiesFromBackend = function(){
          let startAt = loadCount*lazyLoadingCount;
          let endAt = loadCount*lazyLoadingCount+lazyLoadingCount-1;
          firebaseDb.ref('entities').orderByKey().startAt(startAt.toString()).endAt(endAt.toString()).on("value",function(data){
            let entities = data.val();
            storeEntitiesLocally(entities).catch(function(error){
              //We have tried to store the entities locally, but the operation failed.
              //The application keeps running (since we have the data anyway) however we log the error in the console (for now)
              console.log("Error while caching backend data.");
              console.error(error);
            });
            resolve(entities);
          });
        };

        currentEntitiesPromise().then(function(entities){resolve(entities)}, fetchEntitiesFromBackend).catch(fetchEntitiesFromBackend);

      });

    }

};

export default FireBaseTools;
