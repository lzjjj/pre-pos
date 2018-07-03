'use strict';

function countSameElements(collection) {
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
	  }
	  result.push(obj)
  }
  return result;
}
