
    // Create a constructor function called bankAccount, which has 3 methods:
    // withdraw which takes away from the account balance, 
    // deposit which adds to it,
    // and balance which returns the balance.
    // the function should work with or without an initial amount.

    class BankAccount {
        constructor(initial = 0){
            this.balances = initial;
            
        }
            deposit(num){
                this.balances += num;
                
            }
            withdraw(num){
                this.balances -= num;
                
            }
            balance(){
                
                 return this.balances;
            }
    }

module.exports = {
    BankAccount
}
