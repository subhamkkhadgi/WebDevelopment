const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const toggleLink = document.getElementById('toggle');
const toggleBackLink = document.getElementById('toggle-back');

// Function to switch to Sign Up form
toggleLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    loginContainer.classList.remove('show'); // Hide login form
    signupContainer.classList.add('show'); // Show signup form
});

// Function to switch back to Login form
toggleBackLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    signupContainer.classList.remove('show'); // Hide signup form
    loginContainer.classList.add('show'); // Show login form
});

// Initial state for login container
loginContainer.classList.add('show');


