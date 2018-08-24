//write a function called multy which takes an array as argument and multiply each number and then returns the result.
// example
//multy([10,10])
//returns 100
var arr = [10,10];

function multy(arr) {
    var total = 1;
    for(var i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
}
module.exports ={
    multy
}