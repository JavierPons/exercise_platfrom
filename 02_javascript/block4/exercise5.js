// write a function called howManyCaps which counts the capitals in the word, 
// it then returns a sentence saying how which letters are capital and how many capitals there are in total.

var str = 'Antonello Sanna Likes videoGames'

//expected output

// There are 4 capitals and these are A,S,L,G"


function howManyCaps(str) {
    var trans = str.split('');
    var arr = [];
    var count = 0;
    for(var i = 0; i < trans.length; i++) {
            if(trans[i] === trans[i].toUpperCase() && trans[i] !== ',' && trans[i] !== ' ') {
                count++;
                arr.push(trans[i]);
            }

    }
	console.log(arr);
    var words = arr.join(',');
    return `There are ${count} capitals and these are ${words}`;
}
module.exports = {
    howManyCaps
}