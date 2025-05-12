document.addEventListener('DOMContentLoaded', function() {
    // Example of adding interactivity to the subscribe button on the homepage
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            // Check if the email input already exists to avoid duplicates
            if (!document.getElementById('subscribeEmail')) {
                // Create an input field for the email
                const emailInput = document.createElement('input');
                emailInput.type = 'email';
                emailInput.id = 'subscribeEmail';
                emailInput.placeholder = 'Enter your email';
                emailInput.required = true;

                // Insert the email input above the subscribe button
                subscribeBtn.parentNode.insertBefore(emailInput, subscribeBtn);

                // Change the button's behavior to handle email submission
                subscribeBtn.textContent = 'Submit';
                subscribeBtn.addEventListener('click', function handleEmailSubmission() {
                    const emailValue = emailInput.value.trim();
                    
                    // Regular expression for validating email format
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (emailRegex.test(emailValue)) {
                        alert('Thank you for subscribing!');
                        emailInput.remove(); // Remove the email input after submission
                        subscribeBtn.textContent = 'Subscribe Now'; // Reset button text
                        subscribeBtn.removeEventListener('click', handleEmailSubmission); // Remove this event listener
                    } else {
                        alert('Please enter a valid email address.');
                    }
                });
            }
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