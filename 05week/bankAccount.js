//For this assignment we are creating 2 classes that can be used to represent a Bank Account and the transactions it holds.


/*BankAccount Class - This class represents a Bank Account
-----------------
1. The class should have the following fields:
	a. accountNumber - String representing the account number 
	b. owner - String representing the owner of the account
	c. transactions - an array of transactions representing the history of all transactions associated with this account
*/
/*
2. The constructor should take in the following input:
	a. accountNumber - the account number
	b. owner - this is the name of the person who owns the account
	c. NOTE: that the when an account is created, you should initialize the transactions array to be an empty array. 
*/

class BankAccount {
  constructor(accountNumber, owner){
    this.accountNumber = accountNumber;
    this.owner = owner;
		this.transactions = [];
		this.accountBalance = 0; 
		
    //NOTE: that the when an account is created, you should initialize the transactions array to be an empty array.  
  }
    balance(){
			return this.accountBalance;
    }

    deposit(amt){
				if(amt >= 0){
					this.accountBalance = this.accountBalance + amt
					return this.transactions.push(this.accountBalance);
					}	else {
					return false;
		}	
	}

    charge(payee, amt){
			if(amt < this.accountBalance){
				this.accountBalance = this.accountBalance - amt;
				return this.transactions.push(payee, amt);
				}	else {
				return false;
		}
	}
}
  
/*
3. The class should have the following 3 methods:
	a. balanace() - this method does not take any input, and returns the current balance on the account. The balance is computed 
	                by summing up the amounts in the transactions array
	b. deposit(amt) - this method takes in a single input, the deposit amount. This method should create a new transaction 
	                  representing the deposit, and add it to the transactions array.
	                - You should not be able to deposit a negative amount                
	c. charge(payee, amt) - this method takes in the payee and amount, creates a new transaction with the payee and amount, and 
	                        adds the transaction to the transaction array
	                      - You should not be able to charge an amount that would make you balance dip below 0

**/

/*Transaction Class - This class represents a single transaction in a Bank Account
-----------------
1. The class should have the following fields:
	a. date - the date of the transaction
	b. amount - the amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge, or debit)
	c. payee - the description or payee on the transaction 

2. The constructor should take in the following input
	a. amount - the amount on the transaction
	b. payee - the payee or description on the transaction
	c. NOTE: that the date is not passed into the constructor. the constructor should set the date to be the current date automatically
*/

class Transaction {
  constructor(amount, payee){
      this.amount = amount;
			this.payee = payee;
			this.date = Date();
  }
}

class SavingsAccount extends BankAccount {
	constructor(accountNumber, owner, interestRate){
		super(accountNumber, owner, interestRate)
			this.interestRate = .4;
		}
	
	
	accrueInterest(){
		let interest = balance() * this.interestRate;
		return this.transactions.push(interest);
	}
}

/*
Stretch Goal: SavingsAccount Class - This class should extend the BankAccount Class
----------------------------------
1. The class should have an additional field:
	a. interestRate - this value represents the rate at which the account earns interest

2. The constructor should take the following as input:
	a. accountNumber - see BankAccount class
	b. owner - see BankAccount class
	c. interestRate - the rate that is used to compute interest

3. Additional methods:
	a. accrueInterest()  - this method should use the balance() to get the current balance, and add a new transaction representing a deposit of the appropriate amount.




Example Usage - You can turn these into tests


let acct1 = new BankAccount("5553429", "John Doe");

console.log(acct1.accountNumber);  // 5553429
console.log(acct1.owner); // John Doe
console.log(acct1.balance()): // 0

acct1.deposit(100)
console.log(acct1.balance()): // 100

acct1.deposit(-200)  // should not be allowed
console.log(acct1.balance()): // 100

acct1.charge("Target", 30.50)
acct1.charge("FreeBirds", 15.15)
console.log(acct1.balance())  //54.35

acct1.charge("Diamond Shop", 1000) // should not be allowed
console.log(acct1.balance())  //54.35

acct1.charge("Targe", -20) //refund
console.log(acct1.balance())  //74.35

*/