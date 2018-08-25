// Write a function called  checkAge that checks how many days there are between now and the next birthday.
    // if the date of birth is today it should return 
        // happy birthday! 
    // if the date of birth is passed it should return
        // Sorry your birthday is passed for this year
    // if the day provided is out of range (31) or the month is out of the 12 it should return:
        // "Error invalid data provided"
// otherwise it should console.log how many months and days there are between now and the next birthday.
// in case there is less than 1 month between now and the next birthday it should ignore the month.
// for the sake of simplicity let's assume that all months have 30 days.
// Examples:
// Please bare in mind that these examples are not up to date (literally)...


function checkAge(year,month, day) {
    var myDate = new Date();
    var millisecondsPerDay = 1000 * 60 * 60 * 24;


    var realMonth = month-1  
    var endDay = new Date(year,realMonth,day);
  
    var day1 = Math.floor(myDate.getTime()/millisecondsPerDay);
    var day2 = Math.floor(endDay.getTime()/millisecondsPerDay);

    var millisecondsPerMonth = 1000 * 3600 * 24 * 30;
    var millisBetween = myDate.getTime() - endDay.getTime();
    var days = millisBetween / millisecondsPerDay;
    var months = millisBetween / millisecondsPerMonth;
    
    // Round down.
    var rounding = Math.floor(days);
    
    if(day1 == day2) {
            
        return `Happy birthday!`;
    }else if (day1 > day2) {
            console.log(day1, day2)
        return `Sorry your birthday is passed for this year`
    }else if(arguments[0] > 31 || arguments[1] > 12) {
        return `Error invalid data provided`;
    }
    console.log(`your birthday will be in ${months} months and days`);
}
module.exports = {
    checkAge
}