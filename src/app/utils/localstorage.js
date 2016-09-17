const currentEntitiesKey = "currentEntities";
const entityDetailsKey = "entityDetails";

var LocalStorageTools = {
  //Store entities fetched from backend locally. Fire and forget (still catch exception!)
  storeEntitiesLocally: (entities) => {
    return new Promise((resolve, reject) => {
      localStorage.setItem(currentEntitiesKey, JSON.stringify(entities));
      resolve();
    });
  },

  //Fetch local copy of previously stored entities
  currentEntitiesPromise: () => {
      return new Promise((resolve, reject) => {
          let currentEntities = localStorage.getItem(currentEntitiesKey);
          if(currentEntities)
            resolve(JSON.parse(currentEntities));
          else reject();
      });
  },

  //Store entities details fetched from backend locally. Fire and forget (still catch exception!)
  storeEntityDetailsLocally: (entityId, details) => {
    return new Promise((resolve, reject) => {
      localStorage.setItem(entityDetailsKey + entityId, JSON.stringify(details));
      resolve();
    });
  },

  //Fetch local copy of previously stored entities details
  getEntityDetailsPromise: (entityId) => {
    return new Promise((resolve, reject) => {
        let entityDetails = localStorage.getItem(entityDetailsKey + entityId);
        if(entityDetails)
          resolve(JSON.parse(entityDetails));
        else reject();
    });
  }

}

export default LocalStorageTools;
