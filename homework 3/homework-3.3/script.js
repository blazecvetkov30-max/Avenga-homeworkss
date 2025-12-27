let accountBalance = 1000;

function atmWithdraw(requestedAmount) {
    
    if (requestedAmount > accountBalance) {
       
        console.log("Not enough money");
        console.log("Your balance is: $" + accountBalance); 

     } else {

        accountBalance = accountBalance - requestedAmount;
        console.log("You withdrew: $" + requestedAmount);
        console.log("Money left in account: $" + accountBalance);
    }
}

let userInput = prompt("Enter amount to withdraw:");
let withdrawAmount = Number(userInput);
atmWithdraw(withdrawAmount);