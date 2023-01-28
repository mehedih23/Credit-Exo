document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-balance');
    const newWithdrawBalanceString = withdrawInput.value;
    const newWithdrawBalance = parseFloat(newWithdrawBalanceString);

    withdrawInput.value = '';

    if (isNaN(newWithdrawBalance)) {
        alert('Please Provide the correct amount')
        return;
    };

    const prevWithdrawBalance = document.getElementById('total-withdraw');
    let withdrawBalanceString = prevWithdrawBalance.innerText;
    let withdrawBalance = parseFloat(withdrawBalanceString);


    const totalBalance = document.getElementById('total-balance');
    let prevTotalBalanceString = totalBalance.innerText;
    let prevTotalBalance = parseFloat(prevTotalBalanceString);

    if (newWithdrawBalance > prevTotalBalance) {
        alert("You don't have sufficient balance")
        return;
    };

    prevWithdrawBalance.innerText = newWithdrawBalance + withdrawBalance;
    totalBalance.innerText = prevTotalBalance - newWithdrawBalance;

})