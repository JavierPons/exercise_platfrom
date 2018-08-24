// Write a function called stringChop that chops a string into chunks of a given length. The function takes 2 arguments, the first 
// one being the string to chop, and the second one a number that will be the size of you chunks.


function stringChop(str,num) {
    var arr = [];
	
	if(arguments[1] === undefined || arguments[1] === 0){
			var strChop = str.split(' ');
			return strChop;
}else{
        var strChop = str.split('');
        while (strChop.length > 0)
          arr.push(strChop.splice(0,num).join(''));

    }
		return arr.join();
}
module.exports = {
    stringChop
}