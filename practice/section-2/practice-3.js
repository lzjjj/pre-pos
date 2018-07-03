'use strict';

function countSameElements(collection) {
  	Array.prototype.unique = function(){
	  var res = [];
	  var json = {};
	  for(var i = 0; i < this.length; i++){
		if(!json[this[i]] && !json[this[i].substring(0,1)]){
		  if(this[i].indexOf('-') > 0 || this[i].indexOf(':') > 0 || this[i].indexOf('[') > 0){
			res.push(this[i].substring(0,1));
			json[this[i].substring(0,1)] = 1;
		  } else {
		    res.push(this[i]);
			json[this[i]] = 1;
		  }
		
		}
	  }
	  return res;
	  }
	  var arr = collection.unique();
	  var result = [];
	  for(var i = 0; i < arr.length; i++) {
		  var obj = {};
		  obj.name = arr[i];
		  obj.summary = 0;
		  for (var j = 0; j < collection.length; j++){
			if(arr[i] == collection[j]){
				obj.summary++;
			}
			if(arr[i] == collection[j].substring(0,1) && arr[i] != collection[j]){
				var num = collection[j].replace(/[^0-9]/ig,"");
				obj.summary = obj.summary + parseInt(num);
			}
		  }
		  result.push(obj)
	  }
	  return result;
}
