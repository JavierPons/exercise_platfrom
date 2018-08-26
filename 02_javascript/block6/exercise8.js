// Write a function called last that takes one argument, an object, and returns an object containing only the last key/value 
// pair and does not modify the original object.

function last(obj) {
    var obj2 = {};
    for (var key in obj) {
        var mio = `${key}:` ;
        var tuyo = `${obj[key]}`
    }
    
	obj2[mio] = tuyo;
    return obj2;
}
module.exports ={
    last
}
