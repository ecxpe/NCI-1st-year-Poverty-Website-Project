//BY SAHIL
// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const organization = document.getElementById('organization');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    // Name validation
    if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
    } else {
        name.classList.remove('is-invalid');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }
    
    // Organization validation
    if (!organization.value.trim()) {
        organization.classList.add('is-invalid');
        isValid = false;
    } else {
        organization.classList.remove('is-invalid');
    }
    
    // Message validation
    if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
    } else {
        message.classList.remove('is-invalid');
    }
    
    if (isValid) {
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    }
});