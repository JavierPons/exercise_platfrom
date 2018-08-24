// create a function called take_and_push which takes 3 arguments, an array and two numbers.
// the second and third arguments are indexes
// you need to take the elements in the array that are at the given index and push them to a new array.
//then return the new array.

var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

//expected output is the new array with items from the original array with provided indexes
//Once again please stringify the array before returning it.
//===================example===================
// return String(arr)



function take_and_push(arr,index1, index2) {
      var arr2 = [];
        var spli = arr2.push(arr[index1]);
        var spli2 = arr2.push(arr[index2]);
       
         
        return arr2.join();
    }
      

module.exports = {
    arr, take_and_push
}