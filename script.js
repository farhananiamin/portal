 // 1. Cari borang (form) dalam page kau
    const formRegister = document.querySelector('.register-form');

    // 2. Apa jadi bila user klik butang "Create Account"?
    formRegister.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page daripada refresh automatik

        // 3. Ambil apa yang user taip dalam kotak-kotak tu
        const name = document.querySelector('input[placeholder="Full Name"]').value;
        const email = document.querySelector('input[placeholder="Email Address"]').value;
        const phone = document.querySelector('input[placeholder="Phone Number"]').value;
        const password = document.querySelector('input[placeholder="Create Password"]').value;

        // 4. Simpan data dalam "Local Storage" (Memori browser)
        // Kita simpan supaya nanti bila nak Login, kita boleh check balik
        const userObj = {
            fullName: name,
            userEmail: email,
            userPhone: phone,
            userPass: password
        };

        // Tukar jadi string sebab LocalStorage cuma terima text
        localStorage.setItem('dataUser', JSON.stringify(userObj));

        // 5. Bagi mesej kat user
        alert('Mantap! Akaun ' + name + ' dah siap.');

        // 6. Terus hantar user pergi ke Dashboard
        window.location.href = 'home.html'; 
    });

