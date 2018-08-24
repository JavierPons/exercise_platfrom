// Write a function called strCut that takes 3 arguments, the string and 2 indexes, it will then return a string after removing the 
// letters of the 2 given indexes.
function strCut(name,ind1,ind2) {

    var toArr1 = name.split('');
	var toArr2 = name.split('');

	var arr1 = [];
	var arr2 = [];
	var arr3 = [];

	toArr1.splice(ind1,1);
	toArr2.splice(ind2,1);

	arr1.push(toArr1);
	arr2.push(toArr2);
		for(var i = 0; i < arr1.length; i++){
			for(var j = 0; i < arr2.length; i++) {
				if(arr1[i] !== arr2[j]){
						arr3.push(arr1[i]);
                }
            }
        }
			
	console.log(arr3);
}
module.exports = {
    strCut
}