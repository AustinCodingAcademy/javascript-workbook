class BankAccount {

    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = []; 
    }

    
    deposit(amt){
        if (amt < 0) {
            return;
        } else {
            let newDeposit = new Transaction(amt);
            this.transactions.push(newDeposit);
        }

    }

    charge(amt, payee) {    
        if (this.balance() < amt * -1) {
            return "Insufficent funds, purchase invalidated";
        } else {
            let charge = new Transaction(amt, payee);
            this.transactions.push(charge);
        }
    }
    
    balance(){
        let balance = 0;
        this.transactions.forEach((transaction) => {
            balance = balance + transaction.amount;
        })

        return balance;
        }
}

    

class Transaction {
    constructor(amount, payee){
        this.date = new Date(); 
        this.amount = amount;
        this.payee = payee; 
    }
}

let account = new BankAccount("1234", "John Smith");

console.log(account)

// balance on new accounts
account.balance() // 0
account.deposit(100) // 

console.log("My balance after first deposit", account.balance()) // 100

account.deposit(-100) // 100
console.log("Cannot do a negative deposit", account.balance());

// can charge to a vendor
account.charge(-50, "Target");
console.log("My balance after groceries at Target", account.balance()) // 50

// cannot overcharge
account.charge(-1000, "Diamond Shop")
console.log("Cannont overcharge", account.balance()) // 50

// can do refunds
account.charge(20, "Target");
console.log("I got a $20 refund for part of my groceries", account.balance()) // 70

console.log("My number of transactions is", account.transactions.length) // 3 
