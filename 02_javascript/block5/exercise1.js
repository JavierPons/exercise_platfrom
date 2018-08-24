//write a function called calc that takes 3 arguments the first 2 are numbers and the third is an arithmetic operator, 
// so it is either + , -, *, /
// and it executes the appropriate operation according to the provided arithmetic operator.
// make sure you test your function with all 4 arithmetic operations
// should the operator be missing, the function should 
// return 'wrong data provided'

function calc(num1,num2, operat) {
    if(operat == '+') {
        return num1 + num2;
    }else if(operat == '-') {
        return num1 - num2;
    }else if(operat == '/') {
        return num1 / num2;
    }else if(operat == '*') {
        return num1 * num2;
    }else if (operat == undefined){
        return 'wrong data provided';
    }

}

module.exports = {
    calc
}