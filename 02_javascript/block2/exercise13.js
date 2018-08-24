//write a function called characterRemover which takes two arguments, a string and a character to be removed and returns the string 
//free of the unwanted character.
// please note: in order for the string to make sense you should replace the unwanted characters with a space so that your string 
//will look like this:
// I really Like Pizza

var str = 'I,Really,Like,Pizza';
var chr = ',';

function characterRemover(str,chr) {
    var remov = str.split(chr);
    return remov.join(' ');
}


module.exports = {
    str, characterRemover
}