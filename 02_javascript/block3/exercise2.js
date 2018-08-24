// create a function called firstLoopReverse
// outside the function declare a variable called i and give it a value of 11
// inside the function create a for loop that prints out the numbers from 11 to 1.
// them return i

var i = 11;
function firstLoopReverse() {
    for(i; i > 0; i--) {
        console.log(i);
    }
    return i;
}
module.exports = {
    firstLoopReverse, i
}