// write a function called reverser which takes one sting as an argument and returns the same string in reverse.
// you must use
// a loop
// push
// join

var str = '123fdf';
// expected output
// I love deep fried potatoes with mayo and with a nice pint of cold beer

function reverser(str) {
    var spl = str.split('');
	var arr =[];
    for(var i = spl.length; i >= 0; i--) {
		arr.push(spl[i]);
    }

    
    return arr.join('');

}
module.exports = {
    reverser
}
