// write a function called numberConverter which takes an array as an argument 
// then it loops through the array and checks if each element can be converted to a number 
// if they can be converted it converts them and keeps track of how many can't be converted 
// and it returns a string which outputs the result, as shown below.
// "[...numbers] were converted while NUMBER_OF_UNCONVERTABLE couldn't be converted"
// if the argument passed is already a number then it should be ignored, 
// if all arguments are numbers then the function should return instead the following message:
// no need for conversion

// example:
// numberConverter([1,2,3,'4','5', {}, 33])
// should return:
// "2 were converted to numbers  4,5 1 couldn't be converted"

var arr = ['s','3','5',6,7,{}];
function numberConverter(arr) {
    var converted = 0;
    var converArr =[];
    var noConverted = 0;
    for(var i = 0; i < arr.length; i++) {
                if(typeof arr[i] === 'string'){
                        if(parseInt(arr[i])){
                            converted++;
                            converArr.push(parseInt(arr[i]));
                        }else {
                            noConverted++;
                        }
                }else if (typeof arr[i] === 'object'){
                        noConverted++;
            }

}
if (converted == 0 && noConverted == 0) {
                    return `no need for conversion`;
                }else{


    var converJoin = converArr.join('');
        return `${converted} were converted to numbers ${converJoin} ${noConverted} couldn't be converted`;
                }
}
module.exports ={
    numberConverter
}