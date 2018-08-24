//now do the same exercise only this time ignore the type.
var arr = [1,2,3];
var arr2 = [3,4,5];
function twoArrays(arr,arr2) {
    var count = 0;
    arr.forEach(function(item){
     arr2.forEach(function(item2){
        if(item == item2){
            count++;
        }
        });
    });
    return count;
    }
module.exports ={
    twoArrays
}