// Handle the login process
const loginForm = document.getElementById('loginForm');
const error = document.getElementById('error');

if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Check if user is already registered
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

        const user = registeredUsers.find(user => user.username === username && user.password === password);
        if (user) {
            // Login success
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = "profile.html"; // Redirect to profile page
        } else {
            error.innerText = "Invalid credentials or user not found. Please sign up.";
        }
    });
}

// Handle the signup process
const signupForm = document.getElementById('signupForm');
const signupError = document.getElementById('signupError');

if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = registeredUsers.find(user => user.username === newUsername);

        if (userExists) {
            signupError.innerText = "Username already exists. Please choose another.";
        } else {
            registeredUsers.push({ username: newUsername, password: newPassword });
            localStorage.setItem('users', JSON.stringify(registeredUsers));
            alert("Signup successful! Please log in.");
            window.location.href = "html.html"; // Redirect to login page
        }
    });
}
