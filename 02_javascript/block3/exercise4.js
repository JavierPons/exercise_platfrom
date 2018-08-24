// declare the following array
var array = ['one','two','three','four']
// create a function called looper which takes the array as argument
// inside it write a forEach loop which console.log each element and each index for every iteration.
//inside the function declare a variable called count, and increment it by one for each iteration then return count.

var arr = ['one','two','three','four'];

function looper(arr) {
    var count = 0;
    arr.forEach(function(item, index){
        
        console.log(item,index);
        count++;
    });
    return count;
}

module.exports = { 
    looper, arr
}