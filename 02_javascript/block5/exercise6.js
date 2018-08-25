//Let's make a currency converter!
// it should be a flexible function which reacts differently to different inputs.
// Outside the function declare an array called currenciesDB which will hold your currencies.
// write a function called dinamicConverter which takes three arguments.
    //if the first argument is "add" then the second is:
        // an array which contains a currency and an exchange rate (to the dollar)
        // if the item is successfully added it should return the number of added items.

    //if the first argument is "convert" then the second is:
        // an array which contains the currency and the amount that you wish to convert.
        // the third argument will be the currency that you want to convert your money to.
        // if the currency is not present or any of the arguments is missing it should return an error message:
        //"invalid data provided!"

// PLease make sure that currency is added only once not to overload your DB!
// Should the currency already present you should return "invalid data provided!"
// It should return the result of the conversion.
   
var currenciesDB = []; // currencies dollar, euro, gbp, coronas,
function dinamicConverter(arg1,arg2,arg3) {
	var arrMia = [];
        
    if( arg1 === 'add') {
        
       
            if( currenciesDB.length === 0) {
                currenciesDB.push(arg2);
				return 1;
				
            }else if(currenciesDB.length > 0){
                function isthere(arr,val){
                    
                }
                   }
            		
            
        //return it has beed add 1
        // if have been present --> invalid data provided!
    }else if(arg1 === 'convert') {
            // arg3 currency to convert in that
            // if is other 'gbp' 'dollar' 'euro'
    }

}
//'gbp'
// currenciesDB = [['usd'],['eur'],['gbp']]

// find if currency exist in array method 1
//function isthere(arr, val){
//	var fountIt = false;
//	arr.forEach(function(ele){
//		if(ele[0] === val[0]) {
//			fountIt = true;
  //      }
//	})
//	return fountIt;
//}
// 2
//function findIt (arr, val){
//	return arr.findIndex(function(a){ 
//		return a[0] === val; 
//	})
// }








module.exports ={
    currenciesDB, dinamicConverter
}