const username = document.getElementById('emf');
const pass = document.getElementById('secret');
const login = document.getElementById('right');
const cancel = document.getElementById('left');

function validateusername(){
	if (username.value.includes("@")){
		document.getElementById("text").innerHTML = "";
		return true;
	} else{
		document.getElementById("text").innerHTML = "invalid input.";
	}
}

function validatepass(){
	if (pass.value == "0505"){
		alert('Login successful!');
	} else if (pass.value == ""){
		alert('Please input username or password.');
	} else{
		alert('Login failed!');
	}
}

login.addEventListener('click', () => {
	if (validateusername()){
		if (validatepass()){
		}
	} 
});

cancel.addEventListener('click', function(){
		location.reload()
});