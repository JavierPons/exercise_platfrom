//create a function called findPosition which takes two arguments, an array and an element and it return the index of the given element.
var arr = ['glass','car','watch','sofa','macbook']
var elem = 'car';
function findPosition(arr, elem) {
    return arr.indexOf(elem);
}


module.exports = {
    arr, findPosition
}