
// write a function called getIndex which finds the index of an element in an array of objects, 
// the objects have multiple key/value pairs so your function need to be flexible enough to find by any of them.
// please don't google "how to find index of an object in javascript" or similar
// You cannot use the ES6 method findIndex for this exercise!
// it should return the index of the found element or -1 if is not there.

function getIndex(arr) {
    var count = 0;
arr.forEach(function(item){
        
        if(item != undefined){
            count++;            
}else{ 
    return -1

}
        
})
       return count; 
}
module.exports ={
    getIndex
}