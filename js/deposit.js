document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-balance');
    const newDepositBalance = depositInput.value;

    const prevDepositBalance = document.getElementById('total-deposit');
    let depositBalance = prevDepositBalance.innerText;

    const totalBalance = document.getElementById('total-balance');
    let prevTotalBalance = totalBalance.innerText;

    prevDepositBalance.innerText = parseFloat(newDepositBalance) + parseFloat(depositBalance);
    totalBalance.innerText = parseFloat(newDepositBalance) + parseFloat(prevTotalBalance)
    depositInput.value = '';
})