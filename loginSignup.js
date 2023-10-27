// Function to handle user signup
function signUp() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if user already exists in local storage
    if (localStorage.getItem(email)) {
        alert('User with this email already exists.');
        return;
    }

    // Store user data in local storage (not secure for production)
    const userData = { firstName, lastName, email, password };
    localStorage.setItem(email, JSON.stringify(userData));
    alert('Signup successful. You can now log in.');

    // Redirect to index.html after successful signup
    window.location.href = "index.html";
}

// Function to handle user login
function logIn() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem(email));

    // Check if user exists and the password is correct
    if (userData && userData.password === password) {
        alert(`Welcome, ${userData.firstName} ${userData.lastName}!`);
        
        // Redirect to index.html after successful login
        window.location.href = "index.html";
    } else {
        alert('Invalid email or password.');
    }
}