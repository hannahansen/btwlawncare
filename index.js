// Initialize EmailJS with your public key
(function() {
    emailjs.init("xYF3Hjt3At4WI65Mc");
})();

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inquiry-form');
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function(e) {
        let value = phoneInput.value.replace(/\D/g, '');
        if (value.length > 3 && value.length <= 6) {
            value = value.replace(/^(\d{3})(\d{1,3})/, '$1-$2');
        } else if (value.length > 6) {
            value = value.replace(/^(\d{3})(\d{3})(\d{1,4})/, '$1-$2-$3');
        }
        phoneInput.value = value;
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Send the form data via EmailJS
        emailjs.sendForm('andrewlawncare', 'template_d9177n7', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Inquiry successfully sent!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send the inquiry. Please try again later.');
        });
    });
});
