// Write a function called modifyObject that takes 3 arguments. 
// the first argument is the object to which you are adding new data
// the second argument is a key to be added
// the third argument is the value to be associated with the key

var obj = {a: 1, b: 2}
function modifyObject(obj, c, num) {
    
   obj[c]=num;
   return obj;
}
module.exports ={
    obj, modifyObject
}