document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-balance');
    const newWithdrawBalance = withdrawInput.value;

    const prevWithdrawBalance = document.getElementById('total-withdraw');
    let withdrawBalance = prevWithdrawBalance.innerText;

    const totalBalance = document.getElementById('total-balance');
    let prevTotalBalance = totalBalance.innerText;

    prevWithdrawBalance.innerText = parseFloat(newWithdrawBalance) + parseFloat(withdrawBalance);
    totalBalance.innerText = parseFloat(prevTotalBalance) - parseFloat(newWithdrawBalance);
    withdrawInput.value = '';
})