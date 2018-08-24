//create a function called concatenator which takes an array as argument
// and then using Array.concat it returns a new array which is a clone of the original array.

var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

//Once again please stringify the array before returning it.
//===================example===================
// return String(arr)

function concatenator(arr) {
    var con = arr.concat();
    return con.join();
}

module.exports = {
    concatenator,
    arr
}