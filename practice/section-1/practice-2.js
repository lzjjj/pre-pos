'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  for(var i in collectionA) {
	  for(var j in collectionB[0]){
		if(collectionA[i] === collectionB[0][j]){
			result.push(collectionA[i]);
			break;
		}
	  }
  }
  return result;
}
