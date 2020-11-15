var amountInAccount = 0;
var deposit = 0;
var withdraw = 0;

//check balance
function checkBalance() {
 var amount = document.getElementById('amount'); //returns the <p> tag with id 'amount'
    amount.innerText ="Your available balance is $" + amountInAccount;
}

$("#bank-actions").change(function(){
    console.log($(this).val());

    var selectboxVal = $(this).val();
    switch (selectboxVal) {
        case "check":
            checkBalance();
            break;
        case "withdraw":
            withdrawMoney();
            break;
        case "deposit":
            depositMoney();
            break;
        default: 
            break;
    }
});

//deposit money
function depositMoney() {
    var deposit = prompt("how much are you depositing today?");
    amountInAccount = amountInAccount + parseInt(deposit);
    checkBalance();
}

//withdraw money
function withdrawMoney(){
  var withdraw = prompt("how much are you taking out today?");
  
  if(amountInAccount <= 0 || withdraw > amountInAccount){
    alert("Please make a deposit. Your account does not have sufficient funds");
  }
  else{
    amountInAccount = amountInAccount - parseInt(withdraw);
     checkBalance();
  }
}


