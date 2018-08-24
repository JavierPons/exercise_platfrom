// write a function called lowerCaseLetters which takes a string as argument.
// the string will contain some upper case letters and some numbers, 
// then create a new variable which needs to contain all the lowercase letters of the original string
// once done return the resulted string 

// original sentence = An2323t2323one32llo123455Likes567323Play323ing567243G2323a3mes345

// expected output           antonello likes playing games

function lowerCaseLetters(str) {
	var newArr = [];
	var arr = str.split('');
	for(var i = 0; i < arr.length; i++) {
		if(	arr[i].includes('0') || arr[i].includes('1') ||  arr[i].includes('2') || arr[i].includes('3') || arr[i].includes('4')|| arr[i].includes('5')|| arr[i].includes('6')|| arr[i].includes('7')|| arr[i].includes('8')|| arr[i].includes('9')) {
			arr.splice(arr[i], 1);
        }else {
			newArr.push(arr[i]);
}
} 

		return newArr;		
}
		
	
		
	
module.exports = {
	lowerCaseLetters
}