//create a function called isThere which takes an array as first argument and a string as second, it needs to check if 
// the string is inside the array and returns true if it is and false if it's not.


//green, red, pink,

var arr = ['green','red','black','blue','brown','yellow','purple']
//expected output

//true
//true
//false

function isThere(arr,str) {

    if(arr.includes(str)) {
        return true;
    }else {
        return false;
    }

}
module.exports ={
    arr, isThere
}


