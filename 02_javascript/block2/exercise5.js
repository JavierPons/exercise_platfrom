var arr = ['car','soap','banana','tv','toothbrush'];
function removeFirstAndLast(arr) {
    var first = arr.shift();
    var last = arr.pop();
     return arr.join();

}
module.exports = {
    arr, removeFirstAndLast
}