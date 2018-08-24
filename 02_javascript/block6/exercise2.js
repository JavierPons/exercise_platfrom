// write a function called addToObj which takes two arguments and returns an object which has the first argument as a key and 
// the second as value.

function addToObj(item1, item2) {
    var obj = {}
     obj[item1];
    obj[item1] = item2  
    return obj;     
}
module.exports = {
    addToObj
}