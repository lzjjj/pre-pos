'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(var i in collectionA){
	  for(var j in objectB.value){
		  if(collectionA[i].key === objectB.value[j]){
			collectionA[i].count--;
		  }
	  }
  }
  return collectionA;
}
