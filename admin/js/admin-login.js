function Login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Placeholder for sending login request to the server
    sendLoginRequest(email, password)
        .then(function(response) {
            if (response.success) {
                // If login is successful, redirect to the dashboard page
                window.location.href = "dashboard.html"; 
            } else {
                // If login fails, display an error message
                document.getElementById("wrong-info").style.display = "block";
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
}

// Placeholder for sending login request to the server
function sendLoginRequest(email, password) {
    // Simulate sending login request and getting a response
    return new Promise(function(resolve, reject) {
        // Simulate a successful login response
        if (email === "admin@gmail.com" && password === "password") {
            resolve({ success: true });
        } else {
            // Simulate a failed login response
            resolve({ success: false });
        }
    });
}