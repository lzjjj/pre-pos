'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  var collectionB = objectB.value;
  for(var i in collectionA) {
	  for(var j in collectionB){
		if(collectionA[i].key === collectionB[j]){
			result.push(collectionA[i].key);
			break;
		}
	  }
  }
  return result;
}
