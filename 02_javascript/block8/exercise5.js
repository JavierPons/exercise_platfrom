// write your own sorting function to sort an array of numbers.
    // this function can take up to 2 arguments
    // the first is the array that you wish to sort
    // the second is the order of sorting
    // if the second argument is not passed it should default to 'ascending'
    // if the second argument is passed and is 'descending then it should sort the array in descending order'
    // if the second argument is passed but is not ascending nor descending it should return an error message alerting the user that he/she passed the wrong data.
    
    // You can't use any built-in methods apart from console.log, alert and document.write
    // try splitting this task into smaller inner functions to avoid repetition and a 
    // gigantic unreadable if statements.
    // 

    function sorter(arr, order){
        if(order === undefined){
          return arr.sort(function (a, b) {
                return a - b;
		
});
        }else if(order === 'ascending'){
          return arr.sort(function (a, b) {
                return a - b;
		
});

    }else if(order === 'descending'){
          return arr.sort(function (a, b) {
                return b - a;
		
});

    }else if(order !== 'descending' || order !== 'ascending' || order !== undefined){
         return 'wrong order provided whatever please provide us with ascending or descending order instructions';
 


    }
}
module.exports ={
    sorter
}