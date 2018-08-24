var arr = ['cheese','salame','bread','water','pizza']
var position = 2;
function splicer (arr, position) {
    arr.splice(position,1);
   return arr.join();
   
}
module.exports = {
    arr, position, splicer
}