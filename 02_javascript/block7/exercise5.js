// Without Googling how to shuffle elements inside an array in javascript create a function called shuffle and implement in it 
// your own algorithm to shuffle the elements inside of the given array.


var arr = ['one','two','three','four']   

function shuffle(arr) {
  var shuf = arr.sort();
    return shuf;
}
module.exports = {
    shuffle
}