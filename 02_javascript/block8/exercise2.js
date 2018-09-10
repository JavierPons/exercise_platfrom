// Write a function called recursive that loops (using recursion) through an array of objects(name : age).
    // it should take each pair and push them to an empty array as nested arrays. 

    function recursive(arr){
        var arr2 = [];
        if(Array.isArray(arr)){
           for(var ele of arr){
               arr2.push(ele.name, ele.age)
        }
            return arr2
    }
 }
module.exports = {
    recursive
}

// con luis:

var loop = (i, arry) => {

    // add the code you want to do here
      var arr3 = [];
    arr3.push(arry[i].name)
  
      arr3.push(arry[i].age)
       console.log(arr3, 'arr3 second time')
      var joined = arr3.join('');
      arr2.push(joined);
      console.log(arr2, 'arr2')
    if (i < arry.length){
           loop(i += 1, arry)
      }
  }