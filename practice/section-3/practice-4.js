'use strict';

function createUpdatedCollection(collectionA, objectB) {
	Array.prototype.unique = function(){
	  var res = [];
	  var json = {};
	  for(var i = 0; i < this.length; i++){
		if(!json[this[i]] && !json[this[i].substring(0,1)]){
		  if(this[i].indexOf('-') > 0){
			res.push(this[i].substring(0,1));
			json[this[i].substring(0,1)] = 1;
		  } else {
		    res.push(this[i]);
			json[this[i]] = 1;
		  }
		}
	  }
	  console.log(res)
	  return res;
	}
	var collectionAunique = collectionA.unique();
	var collectionC = [];
	for(var i = 0;i < collectionAunique.length;i++){
		var obj = {}
		obj.key = collectionAunique[i];
		obj.count = 0;
		for(var j = 0;j < collectionA.length;j++){
			if(collectionAunique[i] === collectionA[j]){
				obj.count++;
			}
			if(collectionAunique[i] !== collectionA[j] && collectionAunique[i] === collectionA[j].substring(0,1)){
				var num = collectionA[j].replace(/[^0-9]/ig,"");
				obj.count= obj.count + parseInt(num);
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
