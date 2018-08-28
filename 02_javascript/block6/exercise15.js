//Write a function called sort that sorts the values of an object, which should all be numbers, 
//from the smallest to the biggest. The function will return a new object of which the keys are the indexes going from 0 to n; 
// where n is the number of properties of the object minus 1.

function sort(obj) {
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
}
module.exports ={
    sort
}
