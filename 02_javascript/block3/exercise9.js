// write function called twoArrays which takes two arrays as arguments, 
// inside it declare a variable called count
// it then loops and compare each element of one array with that of the other, 
// and every time it finds a match it increases the number of count by one
// then return count
var arr = [1,2,3];
var arr2 = [3,4,5];
function twoArrays(arr,arr2) {
    var count = 0;
    arr.forEach(function(item){
     arr2.forEach(function(item2){
        if(item === item2){
            count++;
        }
        });
    });
    return count;
    }
module.exports ={
    twoArrays
}
