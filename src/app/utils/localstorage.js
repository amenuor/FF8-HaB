let currentEntitiesKey = "currentEntities";

//Store entities fetched from backend locally. Fire and forget (still catch exception!)
export function storeEntitiesLocally(entities) {
  console.log("storing");
  console.log(entities);
  return new Promise((resolve, reject) => {
    localStorage.setItem(currentEntitiesKey, JSON.stringify(entities));
    resolve();
  });
}

//Fetch local copy of previously stored entities
export function currentEntitiesPromise() {
    return new Promise((resolve, reject) => {
        let currentEntities = localStorage.getItem(currentEntitiesKey);
        if(currentEntities)
          resolve(JSON.parse(currentEntities));
        else reject();
    });
}

// get current user without promise
export function currentEntities(){
  return JSON.parse(localStorage.getItem(currentEntitiesKey));
}
