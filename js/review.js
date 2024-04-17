document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        document.getElementById('popup').classList.remove('hidden');
        setTimeout(function() {
            document.getElementById('popup').classList.add('hidden');
        }, 3000);
    }
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Пожалуйста, заполните все поля формы.');
        return false; 
    }

    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var validEmail = re.test(email);
    if (!validEmail) {
        alert('Адрес электронной почты введен неправильно!');
        return false; 
    }

    return true;
}
