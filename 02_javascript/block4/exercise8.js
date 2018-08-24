// create a function called uniqueElements which takes an array as argument.
// you need one array with the unique elements so loop through and get rid of duplicates.
// (also these who were double before removing the duplicates)
// you should return a string containing 
// one array only with the unique elements, without duplicates
// the original array should be left untouched..

// var originalArray = ['mike','jason','peter','robert','mike','jason','jenny','jane']

// example return:
// old array: ['mike','jason','peter','robert','mike','jason','jenny','jane']
// new array: ['mike','jason','peter','robert','jenny','jane']

function uniqueElements(arg) {
    var count = arg.slice(0);
    for(var i = 0; i < arg.length; i++) {
        for(var j =0; j < arg.length; j++) {
            if(i != j && arg[i] == arg[j]) {
                 count.splice(arg[j],1);
				
            }else if(i == j && arg[i] != arg[j]){
				count.push(arg[i]);
        }
    }

}
    return `old arry ${arg} \n new array ${count}`;
}
module.exports = {
    uniqueElements
}