//create a function called swap which takes two arrays as the first two arguments and a position as the third
//It then returns the two arrays swapping the value at the position passed as argument.
// return both arrays inside another array (as a string) see example below:
//EXAMPLE
//========GOOD=========
//function swap(arr, arr2, pos){
// ...your code goes here
//return String([arr, arr2])
//}
//=========BAD=========
//function swap(arr, arr2,pos){
// ...your code goes here
//return arr, arr2
//}
var arr  =  ['banana','apple','orange'], 
arr2 =  ['tv','dvd-player','playstation'], 
pos  =  2;

//EXAMPLE
swap(arr, arr2, pos)
// returns (2) [Array(3), Array(3)]
//["banana", "apple", "playstation"]
//["tv", "dvd-player", "orange"]



function swap(arr, arr2,pos){
    
    var firstArr = arr[pos];
    var secondArr = arr2[pos];
    arr[pos] = arr2[pos];
    arr2[pos] = firstArr;
    var final = arr.concat(arr2);
    return final.join();

}


module.exports ={
    arr, arr2,pos, swap
}


