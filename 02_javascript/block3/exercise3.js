//write a function called isEven which takes an array as argument and check if each element is even or odd.
// inside the function declare a variable called count which keeps track of how many even numbers there are.
// once done return count
// see example below for how to use a basic if statement here.

function isEven(arr){
    //declare your count
    // loop and inside it...
    var count = 0;
    for( var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0){
            count++
    }
    
}
return count;
}
module.exports ={
    isEven
}