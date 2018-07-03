'use strict';

function countSameElements(collection) {
	Array.prototype.unique = function(){
	  var res = [];
	  var json = {};
	  for(var i = 0; i < this.length; i++){
		if(!json[this[i]]){
		  if(this[i].indexOf('-') > 0){
			res.push(this[i].substring(0,1));
		  } else {
		    res.push(this[i]);
		  }
		json[this[i]] = 1;
		}
	  }
	  return res;
	  }
	  var arr = collection.unique();
	  var result = [];
	  for(var i = 0; i < arr.length; i++) {
		  var obj = {};
		  obj.key = arr[i];
		  obj.count = 0;
		  for (var j = 0; j < collection.length; j++){
			if(arr[i] == collection[j]){
				obj.count++;
			}
			if(arr[i] == collection[j].substring(0,1) && arr[i] != collection[j]){
				obj.count = parseInt(collection[j].substring(2));
				break;
			}
		  }
		  result.push(obj)
	  }
	  return result;
}
