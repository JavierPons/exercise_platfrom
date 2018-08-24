var arr = ["one","two","three","four"];

function pusher(arr) {
    var arr2 = [];
    arr2.push(arr);
    return arr.join();
}


module.exports = {
    arr, pusher
}