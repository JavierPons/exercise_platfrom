// Extend the functionality of the previous function Sort to include the possibility of having different types of sorting according 
// to the arguments we pass. 
// we need to be able to decide if sorting by keys or by value and if in ascending or descending order.
// please also note that the keys are letters and the values are numbers so should the sorting be by key it needs to sort 
// alphabetically.

function sort(obj,arg1,arg2) {
    if(arg1 === 'values' && arg2 === 'ascending'){

			 var myObj = {};
   			 var arr = [];
    	for(var key in obj){
         arr.push(obj[key])   
       }
       arr.sort(function(a, b) {
        return a - b;
      });
     
		for(var j = 0; j < arr.length; j++) {
				myObj[j]= arr[j];
        }
		return myObj;


}else if(arg1 === 'values' && arg2 === 'descending'){

		 var myObj = {};
   			 var arr = [];
    	for(var key in obj){
         arr.push(obj[key])   
       }
       arr.reverse(function(a, b) {
        return a - b;
      });
     	var j = 0
		for(j = arr.length; j > -1; j--) {
				myObj[j]= arr[j];
        }
		return myObj;

}else if(arg1 !== 'values' || arg1 !== 'keys' || arg2 !== 'descending' || arg2 !== 'ascending'){
        console.log("missing argument here!");
    }
	
}

module.exports ={
    sort
}