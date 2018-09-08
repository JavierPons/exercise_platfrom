// To practice passing data between functions let's create a crypto converter…
// You need to create several functions, each will be responsible for its own tasks and to call the next function.
// addCurrency
// findcurrency
// converter
// tellConversion
// You should exclusively call addCurrency and it will call the others
// add currency takes three arguments 
// a coin, its value and an array of coins (our coins database)
// the coin should be an object with the following structure:

// {
//      coin:'coin_here', 
//      rate:CONVERSION_RATE_TO_USD_TYPE_NUMBER
// }

// addCurrency should first check if the coin already exists in the DB and if it doesn't it should add it on and return the following:
// "New coin {YOUR_NEW_ADDED_COIN_GOES_HERE} added to Database"
// If the coin does exist in the DB it should call findcurrency which should retrieve the conversion rate of the given currency and 
// then passing that should call convert 
// which s in charge of doing the actual conversion.
// However it is TellConversion who is in charge to return the final message to the user.
// "You will receive {AMOUNT} usd for your 2 {COINS_NAME}"
// Please make sure that when adding the new currency the message capitalize the coin name.
// Please make sure that in the final message

dbCoins = [{
    coin:'EURO', 
    rate:0.86
  },
  {
    coin:'YEN', 
    rate:0.86
  },
  {
    coin:'KORONA', 
    rate:0.86
  }
  ];
  function addCurrency(coin, value,dbCoins){
    var myIndex = dbCoins.findIndex(obj => obj.coin == coin);
   			if( myIndex !== -1 ){
			 	findCurrency(coin, value, dbCoins, myIndex)}
			else if(myIndex === -1 ){
				 dbCoins.push({coin: coin});
							
					return `New coin ${coin} added to Database`
            }    
}
findCurrency = (coin,value,dbCoins,index) => {
			
    console.log(coin.rate,value,index)
}


module.exports = {
    addCurrency, findcurrency, converter, tellConversion
}