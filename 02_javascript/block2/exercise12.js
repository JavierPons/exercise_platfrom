//now do the same exercise using the method includes only this time you should return false if the color is there and true if it's not!
var arr = ['green','red','black','blue','brown','yellow','purple']
//green, red, pink,

//expected output
//false
//false
//true

function isThere (arr, str) {
    if(arr.includes(str)) {
        return false;
    }else {
        return true;
    }
}
module.exports ={
    arr, isThere
}