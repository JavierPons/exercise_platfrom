// write a function called boolanChecker, it takes two arguments, one array and one maxCapacity which is a number
// create an empty array called bool
// create a variable called maxCapacity
// and assign to it a value of 5
// loop through the provided array and every time you find a boolean push it to our bool array until you reach the maxCapacity:
// if the maxCapacity argument is missing it should default to unlimited;

var arr  = ['mike','john',true, false,12,true,false, false,true,false,true,false]

//once done you should return a string as below:
// `{how many booleans goes here} booleans were found {your booleans go here}`


function boolanChecker(arr, maxCapacity) {
	
    var bool = [];
    var maxCapacity = 5;
    var total= 0;
    
       for(var i = 0; i < arr.length; i ++){
            if( typeof arr[i] === 'boolean') {
                if(arr.length <= maxCapacity){
                bool.push(arr[i]);
					total++
                }
        }else if(typeof maxCapacity === undefined ){

							bool.push(arr[i]);
            }
       }
            return `${total} booleans were found ${bool}`;

}

module.exports = {
    boolanChecker
}