// Write a function called strCut that takes 3 arguments, the string and 2 indexes, it will then return a string after removing the 
// letters of the 2 given indexes.
function strCut(str,one,two) {
	str = str.split('');
	str.splice(one,1);
	str.splice(two-1,1);
	return str.join('');

}
module.exports = {
    strCut
}