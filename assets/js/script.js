document.addEventListener('DOMContentLoaded', function() {
    // Example of adding interactivity to the subscribe button on the homepage
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            alert('Thank you for subscribing!');
            // In a real application, you would handle form submission or API calls here.
        });
    }

    // Example of handling the contact form submission
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const sendMessageBtn = document.getElementById('sendMessageBtn'); // Assuming the button has this ID

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // In a real application, you would send this data to a server
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Simulate a successful submission
            if (sendMessageBtn) {
                sendMessageBtn.style.display = 'none'; // Hide the send message button
            }
            formMessage.textContent = 'Message sent successfully!';
            formMessage.className = 'success';
            contactForm.reset();
        });
    }
});