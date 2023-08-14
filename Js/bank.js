document.getElementById("btn-deposit").addEventListener("click", function () {
    let depoInput = document.getElementById("depo-input");
    let depositString = depoInput.value;
    let newDeposit = parseFloat(depositString);
    let previousDeposit = parseFloat(document.getElementById("deposit-total").innerText);
    let totalDeposit = newDeposit + previousDeposit;
    document.getElementById("deposit-total").innerText = totalDeposit;
    let previousBalance = parseFloat(document.getElementById("balance-total").innerText);
    let totalBalance = previousBalance + newDeposit;
    document.getElementById("balance-total").innerText = totalBalance;
    depoInput.value = " ";
});
document.getElementById("btn-withdraw").addEventListener("click", function () {
    let withdrawInput = document.getElementById("withdraw-input");
    let withdrawString = withdrawInput.value;
    let newWithdraw = parseFloat(withdrawString);
    let previousWithdraw = parseFloat(document.getElementById("withdraw-total").innerText);
    let totalWithdraw = newWithdraw + previousWithdraw;
    document.getElementById("withdraw-total").innerText = totalWithdraw;
    let previousBalance = parseFloat(document.getElementById("balance-total").innerText);
    let totalBalance = previousBalance - newWithdraw;
    document.getElementById("balance-total").innerText = totalBalance;
    withdrawInput.value = " ";
});