// write a function called budgetTracker which helps you keep track of your expenses while on vacation...
// you went on vacation to Japan and now you came back and you need to check your finance a bit and in order to do that you 
// need to find out:

// the average expense per day in dollars, 

// each element of the array will be the daily expense in Japanese yens

// the conversion rate for yen to dollars is 0.0089
// return the daily average
var arr = [
    //monday
    '10003', 
    //tuesday
    '46733', 
    //wednesday
    '45833', 
    //thursday
    '3534', 
    //friday
    '57354',
    //satuy
    '45334',
    //sunday
    '34856'
    
]

function budgetTracker(arr) {
    var total = 0;
    var average = 0;
    var arr1 = [];
    for(var i = 0; i < arr.length; i++) {
        var change = parseInt(arr[i],10);
        
         total += change;
    
    }

    
    average = (total / arr.length) * 0.0089;
    return Math.round(average);
}
//expected output
//you spent an average of 310 per day in you trip to Japan



module.exports = {
    budgetTracker
}