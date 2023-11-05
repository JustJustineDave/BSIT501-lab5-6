const username = document.getElementById('username');
const pass = document.getElementById('password');
const cancel = document.getElementById('left');
const login = document.getElementById('right');

function validateusername() {
    if (username.value.includes("@")) {
        document.getElementById("text").innerHTML = "";
        return true;
    } else {
        document.getElementById("text").innerHTML = "Invalid input.";
    }
}

function validatepass() {
    if (pass.value == "1234") {
        alert('Login successful!');
    } else if (pass.value == "") {
        alert('Please input username or password.');
    } else {
        alert('Login failed!');
    }
}

login.addEventListener('click', () => {
    if (validateusername()){
		if (validatepass()){
			
		}
	}
});