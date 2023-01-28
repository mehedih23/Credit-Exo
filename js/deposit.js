document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-balance');
    const newDepositBalance = depositInput.value;
    const newDepoBalance = parseFloat(newDepositBalance);
    depositInput.value = '';

    if (isNaN(newDepoBalance)) {
        alert('Please provide correct amount')
        return;
    }

    const prevDepositBalance = document.getElementById('total-deposit');
    const depositBalance = prevDepositBalance.innerText;
    const depoBalance = parseFloat(depositBalance);

    const totalBalance = document.getElementById('total-balance');
    const prevTotal = totalBalance.innerText;
    const prevTotalBalance = parseFloat(prevTotal);

    prevDepositBalance.innerText = newDepoBalance + depoBalance;
    totalBalance.innerText = newDepoBalance + prevTotalBalance

})