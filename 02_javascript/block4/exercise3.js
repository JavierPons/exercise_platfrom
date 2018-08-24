// write a function called check_types it takes an array as argument, it loops through it and checks the typeof each element
// it needs to find out how many different data types there are.
// it should at the end return the number of data types.

// example
// check_types([12,12, 12, [], [] ])
// returns 2 because we have 2 data types (numbers and arrays)

// check_types([12,45,66,88])
// returns 1 because we have only one data type (number)

function check_types(arr) {
    debugger;
    var booleanian = 0;
    var numberian = 0;
    var objectian = 0;
    var stringian = 0;
    var undefinedian = 0;
    var symbolian = 0;
    
    arr.forEach(function(item){
            if(typeof item == 'boolean' && booleanian == 0) {
                objectian++;
            }else if (typeof item == 'number' && numberian == 0) {
                numberian++
            }else if (typeof item == 'object' && objectian == 0) {
                objectian++;
            }else if(typeof item == 'string' && stringian == 0) {
                stringian++;
            }else if(typeof item == 'undefined' && undefinedian == 0) {
                undefinedian++
            }else if (typeof item == 'symbol' && symbolian == 0) {
                    symbolian++;
            }
    })
    var count = booleanian + numberian + objectian + stringian + symbolian;
    return count;

}
module.exports ={
    check_types
}