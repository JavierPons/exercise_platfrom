
// Write a function called Splice Which extrapolates properties from an object and uses them for a newly created object. this 
// function can take 3 arguments: the first is an object, the second and third are numbers.
// The second argument indicates the position of the key/value pair we want to start taking properties from (splicing) and the 
// third one indicates how many you are removing. 
// So for instance splice(0,2) refers to the positions 0 and 1 of the object having the following object: var 
// obj = {a: 1, b: 2, c: 2} and calling the function splice with the arguments obj, 0, 2 should return {a: 1, b: 2}

// Example:

// splice(obj, 0,2) returns : {a: 1, b: 2}
// We assume that, as it is common in computer science, the first element of an object is 0 and not 1.

// If the third argument is not passed it should default to 1.

function splice(obj,num1,num2){
    
}


module.exports ={
    splice
}