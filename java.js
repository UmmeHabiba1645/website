<script>
// Email form validation
document.querySelector('.email-form').addEventListener('submit', function(event) {
    const emailInput = document.querySelector('.email-form input[type="email"]');
    const email = emailInput.value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        event.preventDefault(); // Prevent form submission
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Smooth scrolling for navigation links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
</script>
