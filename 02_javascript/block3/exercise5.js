// write a function called isString which takes an array as argument.
// inside it write a forEach loop that loops through this example array and checks if the type of each element is a string, 
// every time it finds a string it pushes it into an array.
// return that array

// you can refer to the example in EXERCISE 3 for the simple if statement if you wish.
var arr = ['hello',3,4,'admit'];

function isString(arr) {
    var arr1 = [];
    arr.forEach(function(item){
        if(typeof item === 'string') {
            arr1.push(item);
        }
       
    });
 return arr1;
}
module.exports = {
    isString
}