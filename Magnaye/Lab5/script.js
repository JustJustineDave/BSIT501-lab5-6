const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('login');
const cancel = document.getElementById('cancel')

function validateUsername() {
const user_string = String(username.value);
	if(user_string.includes("@") && user_string.includes(".com"))  {
        document.getElementById("error").innerHTML = "";
		return true;
	} else {
        document.getElementById("error").innerHTML = "Invalid input. Please input correct username";
        return false;
    }
}
function validatePassword() {
const pass_string = String(password.value);
    if(pass_string == "1234"){
        return true;
    } else if(pass_string == "") {
        alert("Please input username or password");
        return false;
    } else {
        alert("Login Failed!");
        return false;
    }
}
login.addEventListener('click', () => {
	if(validateUsername()) {
        if(validatePassword()) {
            alert("Login Successful!");
        }
	}
});
cancel.addEventListener('click', () => {
    window.location.reload();
});