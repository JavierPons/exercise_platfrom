// write a function called isArrayFunc which takes an argument and returns true if it's an array and 
// false if it's anything else.
var one   = {name:'antonello'}
var two   = ['name', 'antonello']
var three = [[],[],{},"antonello",3,function(){}]

function isArrayFunc(arg) {
    if(Array.isArray(arg)) {
        return true;
    }else {
        return false;
    }
}

module.exports = {
    isArrayFunc
}
