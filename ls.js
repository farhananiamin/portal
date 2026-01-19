// --- BAHAGIAN 1: LOGIN BIASA ---
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const emailInput = document.querySelector('input[placeholder="Email or Username"]').value;
    const passwordInput = document.querySelector('input[placeholder="Password"]').value;

    const savedData = localStorage.getItem('dataUser');

    if (savedData) {
        const user = JSON.parse(savedData);
        if (emailInput === user.userEmail && passwordInput === user.userPass) {
            alert('Login Successful! Welcome, ' + user.fullName);
            window.location.href = 'home.html';
        } else {
            alert('Email atau Password salah!');
        }
    } else {
        alert('Akaun tak wujud. Sila Register dulu!');
    }
});
