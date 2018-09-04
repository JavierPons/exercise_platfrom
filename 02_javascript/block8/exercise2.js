// Write a function called recursive that loops (using recursion) through an array of objects(name : age).
    // it should take each pair and push them to an empty array as nested arrays. 
var arr2 = [];
function recursive(arr){

    arr.forEach(function(item){
       arr2.push(item.name, item.age)
    })

}
module.exports = {
    recursive
}