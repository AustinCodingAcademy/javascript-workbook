const BankAccount = class {
    constructor (inputNumber, inputName){
        this.accountNumber = inputNumber;
        this.owner = inputName;
        this.transactions = [];
        this.processedTransactions = [];
        this.currentBalance = 0;
    }

    balance(){
        for (let i = 0; i < this.transactions.length; i){
            this.currentBalance = this.currentBalance + this.transactions[0].amount;
            this.processedTransactions = this.processedTransactions.concat(this.transactions.shift());
        }
    }
    
    deposit(amt){
        if (amt.amount >= 0){
            this.transactions.push(amt)
        } else (console.log("You cannot depost a negative amount"))
    }
   
    charge(payee, amt){
        this.balance();
        if (amt > this.currentBalance){
            console.log("Transaction Failed. Try Money")
            return "Transaction Failed. Try Money"
        } else if (amt < 0){
            console.log("Cannot charge a negative amount")
            return "Cannot charge a negative amount"
        } else amt = -amt;
            let transaction = {amount: amt, payee: payee}
            this.transactions.push(transaction)
    }

}

const transaction = class {
    constructor(inputAmount,inputPayee){
        this.amount = inputAmount;
        this.payee = inputPayee
        this.date = new Date()
    }
}



let myAccount = new BankAccount(1234, "John Smith")


let firstTransaction = new transaction (50, "Target")
let secondTransaction = new transaction (300, "Walmart")
let thirdTransaction = new transaction (100, "HEB")


console.log(myAccount)


myAccount.deposit(firstTransaction)
myAccount.deposit(secondTransaction)
myAccount.deposit(thirdTransaction)

myAccount.charge("John Smith", 450)

myAccount.balance()
console.log(myAccount)