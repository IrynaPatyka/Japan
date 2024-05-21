document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        
        const formData = new FormData(form);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });


        const phoneRegex = /^\+[0-9]{1,3}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
        if (!phoneRegex.test(userData.phone)) {
            alert('Некоректний формат номеру телефону. Використовуйте формат: +код країни-номер');
            return;
        }

        
        console.log('User Data:', userData);
        
        form.reset();
    });
});
