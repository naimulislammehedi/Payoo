// document.getElementById("cashout-btn").addEventListener("click", function() {
//     // 1 - get the agent number & validate 
//     const cashoutNumberInput = document.getElementById("cashout-number"); 
//     const cashoutNumber = cashoutNumberInput.value; 
//     console.log(cashoutNumber); 
//     if (cashoutNumber.length != 11) {
//         alert("Invalid Agent Number"); 
//         return; 
//     }

//     // 2 - get the amount, validate, convert to number 
//     const cashoutAmountInput = document.getElementById("cashout-amount"); 
//     const cashoutAmount = cashoutAmountInput.value; 
//     console.log(cashoutAmount);

//     // 3 - get the current balance, validate, convert to number
//     const balanceElement = document.getElementById("balance"); 
//     const balance = balanceElement.innerText; 
//     console.log(balance); 

//     // 4 - calculate new balance 
//     const newBalance = Number(balance) - Number(cashoutAmount); 
//     console.log("New Balance: ", newBalance); 

//     if(newBalance < 0) {
//         alert("Invalid Amount"); 
//         return; 
//     }
//     console.log("New Balance: ", newBalance)

//     // 5 - get the pin and verify 
//     const cashoutPinInput = document.getElementById("cashout-pin"); 
//     const pin = cashoutPinInput.value; 
//     if (pin === "1234") {
//         // true:: show an alert > set Balance 
//         alert("Cashout Successful")
//         console.log("New Balance: ", newBalance); 
//         balanceElement.innerText = newBalance; 
//     } else {
//          // false:: show an error > return 
//          alert("Invalid pin"); 
//     }
        
       
// })

document.getElementById("cashout-btn").addEventListener("click", function(){
    // 1 - get the agent number & validate 
    const cashoutNumber = getValueFromInput("cashout-number"); 
    if (cashoutNumber.length != 11) {
        alert("Invalid Number"); 
        return; 
    }
    console.log(cashoutNumber); 

    // 2 - get the amount 
    const cashoutAmount = getValueFromInput("cashout-amount"); 

    // 3 - get the current balance 
    const currentBalance = getBalance(); 
    // 4. calculate balance 
    const newBalance = currentBalance - Number(cashoutAmount); 
    console.log(newBalance); 
    if (newBalance < 0) {
        alert("Invalid Amount"); 
        return; 
    } 
    const pin = getValueFromInput("cashout-pin"); 
    if (pin === "1234") {
        alert("Cashout Successfull"); 
        setBalance(newBalance); 
    } else {
        alert("Invalid Pin"); 
        return; 
    }

}); 