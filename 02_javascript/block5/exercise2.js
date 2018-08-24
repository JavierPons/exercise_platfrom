 // extend our awesome calc function by adding some conditions...
// in case the third arguments is  / or * and the second argument is not provided, the second argument should default to one.
// in case the third arguments is +  or  - and the second argument is not provided, the second argument should default to zero.

function calc(num1,num2, operat) {
    if(operat == '+' && !isNaN(num2)) {
        return num1 + num2;
    }else if (arguments[1] === '+'){
		return num1;
    }else if(operat == '-' &&  !isNaN(num2)) {
        return num1 - num2;
    }else if(arguments[1] === '-'){
        return num1;
    }else if(operat == '/' && !isNaN(num2) ){
        return num1 / num2;
    }else if (arguments[1] === '/' ){
        return num1 / 1;
    }else if(operat == '*' && !isNaN(num2)) {
        return num1 * num2;
    }else if(arguments[1] === '*'){
        return num1 * 1;
    }else {
		return 'wrong data provided';
    }

}
 
 module.exports = {
     calc
 }