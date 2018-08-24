// create a function called shortener which takes a string as argument.
// this string will be a full name like "Antonello sanna"
// you need to convert the name into an abbreviated form (initials), meaning that you take the first letter of the surname, 
// also make sure it is capitalized, and add a dot at the end.
// Examples

// Ada lovelace 
// expected output => "Ada L." 

// Antonello Sanna
// expected output => Antonello S.
var str = 'Ada lovelace';
function shortener(str) {
    var arr = [];
	var dot = '.';
    var converTo = str.split(' ');
	arr.push(converTo[0]);
	for(var i = 0; i < converTo.length-1; i++) {
			var firstEle = converTo[1][0];
			var upper = firstEle.toUpperCase();
			arr.push(upper) ;
}
		return arr.join(' ')+ dot;
}

module.exports = {
    shortener
}