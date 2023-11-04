document.getElementById("registrationForm").addEventListener("submit", function (event) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    usernameError.textContent = "";
    passwordError.textContent = "";

    if (username.trim() === "") {
        usernameError.textContent = "Username is required.";
        event.preventDefault(); 
    }

    if (password.trim() === "") {
        passwordError.textContent = "Password is required.";
        event.preventDefault(); 
    }
});