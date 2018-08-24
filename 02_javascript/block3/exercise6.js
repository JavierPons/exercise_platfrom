//write a function called sum which takes an array as argument and then return the sum of all its elements.
// example
// sum([10,10])
// returns 20
var arr = [2,3,4];
function sum(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
       total += arr[i]
    }

    return total;
}
module.exports ={
    sum
}