// Deposit Section
document.getElementById("btn-deposit").addEventListener("click", function () {
    let depoInput = document.getElementById("depo-input");
    let depositString = depoInput.value;
    let newDeposit = parseFloat(depositString);  //convert input to float
    depoInput.value = " ";
    if(isNaN(newDeposit)){
        return;
    }
    if (newDeposit < 0) {
        alert("Please provide positive amount")
    }
    else {
        //get the previous depo as float
        let previousDeposit = parseFloat(document.getElementById("deposit-total").innerText);
        let totalDeposit = newDeposit + previousDeposit;
        // set into total deposit
        document.getElementById("deposit-total").innerText = totalDeposit;

        // set into total Balance
        let previousBalance = parseFloat(document.getElementById("balance-total").innerText);
        let totalBalance = previousBalance + newDeposit;
        document.getElementById("balance-total").innerText = totalBalance;
    }
    depoInput.value = " "; //clear input feild
});

//Withdraw Section
document.getElementById("btn-withdraw").addEventListener("click", function () {
    let withdrawInput = document.getElementById("withdraw-input");
    let withdrawString = withdrawInput.value;
    let newWithdraw = parseFloat(withdrawString);
    withdrawInput.value = " ";
    if(isNaN(newWithdraw)){
        return;
    }
    // Checked Negative input
    if (newWithdraw < 0) {
        alert("Please provide positive amount")
    }
    else {
        let previousWithdraw = parseFloat(document.getElementById("withdraw-total").innerText);
        let previousBalance = parseFloat(document.getElementById("balance-total").innerText);
        if (previousBalance < newWithdraw) {
            alert("You don't have this amount of balance")
        }
        else {
            let totalWithdraw = newWithdraw + previousWithdraw;
            document.getElementById("withdraw-total").innerText = totalWithdraw;
            let totalBalance = previousBalance - newWithdraw;
            document.getElementById("balance-total").innerText = totalBalance;
        }
    }

    withdrawInput.value = " "; //clear input feild
});