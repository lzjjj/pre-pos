'use strict';

function createUpdatedCollection(collectionA, objectB) {
    for(var i in collectionA){
	  for(var j in objectB.value){
		  if(collectionA[i].key === objectB.value[j]){
			var num = parseInt(collectionA[i].count/3);
			if (num > 0) {
			  collectionA[i].count = collectionA[i].count - num;
			}
		  }
	  }
	}
  return collectionA;
}
