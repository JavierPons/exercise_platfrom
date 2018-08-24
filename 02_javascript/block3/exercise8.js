// write a function called timesTwo which takes an array as an argument.
// inside it use the forEach loop and push the numbers of the array to a new array and multiply them by two on the way!
// then return the new array (stringified)
// ex return String(arr)

// example
timesTwo([2,3,65,22])

// returns  [4, 6, 130, 44]
function timesTwo(arr) {
    var mult = []
    arr.forEach(function(item){
        mult.push(item * 2);
    })
    return mult.join();
}
module.exports ={
    timesTwo
}