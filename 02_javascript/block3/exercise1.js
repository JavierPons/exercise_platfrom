
// create a function called firstLoop
// outside the function declare a variable called i and give it a value of 1
// inside the function create a for loop that prints out the numbers from 1 to 10.
// then return i

var i = 1;

function firstLoop() {
    for (i; i < 11; i++) {
        
        console.log(i);
    }
return i;
}
module.exports = {
    firstLoop, i
}