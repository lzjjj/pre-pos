'use strict';

function createUpdatedCollection(collectionA, objectB) {
	Array.prototype.unique = function(){
	  var res = [];
	  var json = {};
	  for(var i = 0; i < this.length; i++){
		if(!json[this[i]]){
		 res.push(this[i]);
		 json[this[i]] = 1;
		}
	  }
	  return res;
	}
	var collectionAunique = collectionA.unique();
	var collectionC = [];
	for(var i = 0;i < collectionAunique.length;i++){
		var obj = {}
		obj.key = collectionAunique[i];
		obj.count = 0;
		for(var j in collectionA){
			if(collectionAunique[i] === collectionA[j]){
				obj.count++;
			}
		}
		collectionC.push(obj);
	}
	for(var i in collectionC){
	  for(var j in objectB.value){
		  if(collectionC[i].key === objectB.value[j]){
			var num = parseInt(collectionC[i].count/3);
			if (num > 0) {
			  collectionC[i].count = collectionC[i].count - num;
			}
		  }
	  }
	}
  console.log(collectionC)
  return collectionC;
}
