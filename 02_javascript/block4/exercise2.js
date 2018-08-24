// write a function  called is_an_even_number that takes an array as argument, 
// it loops through it and checks if the elements are numbers (or a string that can be converted to a number) 
// and if they are even.
// you should also keep track of the even numbers by increasing the value of a variable called count, which you should 
// return at the end of the function.
// array 
var arr = [1,5,9,33,65,122,66,['banana']]
// should return 2
var arr = ["100", 33, "Hello"]
// should return 1

function is_an_even_number(arr) {
    var countEven = 0;
    for(var i = 0; i < arr.length; i++) {
       
            if(arr[i] !== isNaN) {
               if( arr[i] % 2 === 0) {
                   countEven++
               }
                
       
    }
    
}
return countEven;
}
module.exports = {
    is_an_even_number
}