
// Write a function called sumAll that takes one argument, an object, and sums all it's values. If no object is provided or if the 
// object is empty sumAll should return 0.

function sumAll(obj) {
    var count= 0;
if(obj == null || obj == undefined){
    return 0;
}else{

    for(var key in obj){
       
        count +=obj[key];
    }
}
    return count;
}
module.exports = {
    sumAll
}