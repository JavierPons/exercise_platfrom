// Create a function called checker that loops through a string and checks how many occurrences of commas and question 
// marks there are in it.
// it then returns a string with the numbers of commas and question marks
// please make sure to use the appropriate form, so if for instance there are more than one commas / question marks you 
// should use 'there is' while if there is only one you should use 'there are'.
// example :
// var str = 'hello, how are you today? I am not bad and you?'
// 1 comma, 2 question marks


var str = 'hello, how are you today? I am not bad and you?'

function checker(str) {
    var comma = 0;
    var question = 0;
debugger;
    var trasform = str.split('');

		trasform.forEach(function(item){
					if(item == ',') {
                comma++;
            }else if (item == '?') {
                question++
            }
})
    
  if(comma > 1 && question > 1) {
      return `there are ${comma} commas, ${question} question marks`;
  }else if (comma > 1 && question <= 1) {
      return `there are ${comma} commas, ${question} question mark`;
  }else if (comma <= 1 && question > 1) {
      return `there is ${comma} comma, ${question} question marks`;
  }else if(comma <= 1 && question <= 1) {
      return `there is ${comma} comma, ${question} question mark`;
  }
    
}
module.exports = {
    checker
}


