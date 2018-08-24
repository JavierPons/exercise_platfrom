// write a function called Filter that takes 3 arguments, an array, a data type and a minLength.
// it will loop through the array and return a new array where the elements are NOT of the type of 
// passed data type and they have a length equal to or bigger than minLength
var arr = ['ssd',3,'errr'];
function filter(arr, dtype, minLength) {

    var arr1 = [];
	
    arr.forEach(function(item){
        if(item.length >= minLength && typeof item !== dtype) {
            arr1.push(item);
        }

    })
return arr1;
}
module.exports = {
    filter
}