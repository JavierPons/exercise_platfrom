// write a function called tellAge that tells you how old you are based on the date of birth passed.
// this function will take 3 arguments month, day and year
// You should use the Date object to set the value of today.
// if the birth date is less than one year from the current date it should return : "you are NUMBER_DAYS old"
// if its more than one year it should return you are NUMBER_YEARS old"
// Info on Date object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


function tellAge(month,day,year) {
    var myDay = new Date();
	var yearNow = myDay.getFullYear();
	var calYears = yearNow - year;
				  var endDay = new Date(year,month,day);
                  var millisecondsPerDay = 1000 * 60 * 60 * 24;

                  var millisBetween = myDay.getTime() - endDay.getTime();
                  var days = millisBetween / millisecondsPerDay;

                  // Round down.
                  var rounding = Math.floor(days);
                        
              

if(calYears > 1) {

	return `You are ${calYears} years old`;

}else if (calYears < 1){

    
		return `You are ${rounding} days old`;
}
}
module.exports = {
    tellAge
}