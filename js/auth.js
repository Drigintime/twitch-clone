const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Login handler
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.elements[0].value;
        const password = loginForm.elements[1].value;

        console.log('Login attempt:', { email, password });

        // Simulate successful login
        alert('Login successful!');
        loginForm.reset();
        document.getElementById('loginModal').style.display = 'none';

        // Update UI to show user is logged in
        document.getElementById('loginBtn').textContent = 'Profile';
    });
}

// Signup handler
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = signupForm.elements[0].value;
        const email = signupForm.elements[1].value;
        const password = signupForm.elements[2].value;
        const confirmPassword = signupForm.elements[3].value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Signup attempt:', { username, email, password });

        // Simulate successful signup
        alert('Account created successfully!');
        signupForm.reset();
        document.getElementById('signupModal').style.display = 'none';

        // Redirect to login
        document.getElementById('loginBtn').click();
    });
}