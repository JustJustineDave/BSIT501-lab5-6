const username = document.getElementById('username');
const pass = document.getElementById('password');
const cancel = document.getElementById('cancel');
const login = document.getElementById('login');

function validateuser(){
	if(username.value.includes("@")){
		return true;
		document.getElementById("text").innerHTML = "";
	} else {
		document.getElementById("text").innerHTML = "Invalid input. Please input valid username";
	}
} 

function validateuser2(){
	if(username.value.includes(".com")){
		return true;
		document.getElementById("text").innerHTML = "";
	} else {
		document.getElementById("text").innerHTML = "Invalid input. Please input valid username.";
	}
} 

function validatepass(){
	if (pass.value == "1234"){
		alert('Login Successful!');
	} else if (pass.value == ""){
		alert('Please input username or password.');
	} else {
		alert ('Login Failed!');
	}
}

login.addEventListener('click', () => {
	if (validateuser()){
		if(validateuser2()){
			if (validatepass()){
			
			}
		}
	}
});

cancel.addEventListener('click', function(){
		location.reload()
});