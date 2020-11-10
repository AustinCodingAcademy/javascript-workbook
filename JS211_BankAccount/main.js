'use strict';
const assert = require('assert');

class BankAccount {
    constructor(accountNumber,owner){
        this.accountNumber=accountNumber;
        this.owner=owner
        this.transactions=[];
        this.record=[];
    }

    balance(){
        let sum =this.transactions.reduce((total,amount)=> total+amount);
        console.log(sum)
        sum=sum.toFixed(2);
        return sum; }
    
    deposit(amount){
        let newTransaction = new Transaction (amount,this.owner);
        this.transactions.push(amount);
        this.record.push(newTransaction)
    }

    charge(payee,amt){

        if (amt<this.balance()){
        let chargeTransaction = new Transaction (-amt,payee)
        this.transactions.push(-amt);
        this.record.push(chargeTransaction);
    }
        else {console.log("not enough Money")}

    }
}

////Transaction Class below

class Transaction {
    constructor(amount, payee){
        this.amount=amount;
        this.payee=payee;
        this.date=new Date();
    }
}

class SavingsAccount extends BankAccount {
    constructor (acct, owner, ir){
        super (acct,owner)
        this.interestrate=ir;
    }

    accrueInterest(){
        const irPayment = this.balance()*this.interestrate;
        let interestTrans = new Transaction (irPayment, "Interest Payment");
        this.transactions.push(irPayment);
        this.record.push (interestTrans);

    }
}


// tests below
if (typeof describe === 'function'){
    describe('BankAccount', function(){
      it('should have an accountNumber, a owner, and a Transaction.lenght of 0', function(){
        const myAccount = new BankAccount('1234', 'John Smith');
        assert.equal(myAccount.accountNumber, '1234');
        assert.equal(myAccount.owner, 'John Smith');
        assert.equal(myAccount.transactions.length, 0);
        
      });});

      describe('BankAccount', function(){
        it('should create a several deposits and charges and then the correct balance', function(){
            const myAccount = new BankAccount('1234', 'John Smith');
            myAccount.deposit(1000);
            myAccount.charge("Target",30);
            myAccount.charge("Amazon",23.4);
            myAccount.charge("gearworks", 2000)
            myAccount.charge("Ebay",230.3);
            myAccount.charge("Store",220);
            myAccount.deposit(100.77);
            console.log (myAccount.record)
            assert.equal(myAccount.accountNumber, '1234');
            assert.equal(myAccount.owner, 'John Smith');
            assert.equal(myAccount.balance(),597.07)
            assert.equal(myAccount.record.length, 6)
          
          
        });});

        describe('BankAccount', function(){
            it('should create a several deposits and ensure no charge greater than balance can occure', function(){
                const myAccount = new BankAccount('1234', 'John Smith');
                myAccount.deposit(20);
                myAccount.charge("Walmart",30);
                assert.equal(myAccount.accountNumber, '1234');
                assert.equal(myAccount.owner, 'John Smith');
                assert.equal(myAccount.transactions.length, 1);
                assert.equal(myAccount.balance(),20)
            });});


        describe('BankAccount', function(){
            it('should create a several deposits and ensure no charge greater than balance can occure', function(){
                const myAccount = new BankAccount('1234', 'John Smith');
                myAccount.deposit(20);
                myAccount.charge("Walmart",30);
               
                assert.equal(myAccount.accountNumber, '1234');
                assert.equal(myAccount.owner, 'John Smith');
                assert.equal(myAccount.transactions.length, 1);
                assert.equal(myAccount.balance(),20)
            });});

            describe('savingAccount', function(){
                it('should create a several deposits and ensure no charge greater than balance can occure', function(){
                    const myAccount2 = new SavingsAccount('1234666', 'John Smith',.1);
                    myAccount2.deposit(20000);
                    myAccount2.charge("Walmart",10000);
                    myAccount2.accrueInterest();
                    assert.equal(myAccount2.balance(),11000);
                });});
    

  }
  