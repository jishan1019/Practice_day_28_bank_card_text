document.getElementById('btn-login').addEventListener('click',function(){
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;
    emailInput.value = '';

    const passwordInput = document.getElementById('password-input');
    const password = passwordInput.value;
    passwordInput.value = '';

    if(email == "s@gmail.com" && password == "1234"){
        window.location.href = 'bank.html'
    }else{
        alert('Dear User Please Enter Valid email or password')
    }
})