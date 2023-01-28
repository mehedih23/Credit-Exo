document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const passwordField = document.getElementById('password');
    const password = passwordField.value;


    // DANGER : Do Not verify Email and Password on the client side.
    if (email === 'abc@def.com' && password === '123456') {
        window.location.href = 'bank.html';
    } else {
        alert('Please enter email : abc@def.com & password : 123456');
    }
})