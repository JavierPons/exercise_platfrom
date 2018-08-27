// Write  an object called bankAccount, and 3 functions: withdraw, deposit and balance. 
// They keep track of the amount added and removed from a bank account when called bankAccount function.
// The balance function takes no argument and withdraw and deposit
// only take one argument.

// Example




var bankAccount = { 
    count: 0,
    balance: function() {
    return this.count;
},
withdraw: function(amount) {
    this.count -= amount;
        
},
deposit: function(depo) {
    this.count += depo;
    
}
}
module.exports = {
    bankAccount
}