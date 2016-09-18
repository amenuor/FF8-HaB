class LocalStorageTools {

  static get currentEntitiesKey(){
    return "currentEntities";
  }

  static get entityDetailsKey(){
    return "entityDetails";
  }

  //Store entities fetched from backend locally. Fire and forget (still catch exception!)
  static storeEntitiesLocally(entities){
    return new Promise((resolve, reject) => {
      localStorage.setItem(LocalStorageTools.currentEntitiesKey, JSON.stringify(entities));
      resolve();
    });
  }

  //Fetch local copy of previously stored entities
  static currentEntitiesPromise(){
      return new Promise((resolve, reject) => {
          let currentEntities = localStorage.getItem(LocalStorageTools.currentEntitiesKey);
          if(currentEntities)
            resolve(JSON.parse(currentEntities));
          else reject();
      });
  }

  //Store entities details fetched from backend locally. Fire and forget (still catch exception!)
  static storeEntityDetailsLocally(entityId, details) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(LocalStorageTools.entityDetailsKey + entityId, JSON.stringify(details));
      resolve();
    });
  }

  //Fetch local copy of previously stored entities details
  static getEntityDetailsPromise(entityId){
    return new Promise((resolve, reject) => {
        let entityDetails = localStorage.getItem(LocalStorageTools.entityDetailsKey + entityId);
        if(entityDetails)
          resolve(JSON.parse(entityDetails));
        else reject();
    });
  }

}

export default LocalStorageTools;
