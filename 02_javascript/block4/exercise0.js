//=======================EXERCISE0======================================//
// create a function called isTrue
// it should check if the data passed into it is NOT:
// undefined
// an empty string
// false
// null
// 0

// your function should take one argument and return true if it is not one of the falsy above and false if it is

var data = undefined;
function isTrue(data) {
    if(data === undefined || data === '' || data === false || data === null || data === 0) {
        return false;
    } else {
        return true;
    }
}
module.exports = {
    isTrue
}