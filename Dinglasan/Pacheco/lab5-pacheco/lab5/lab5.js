const loginForm = document.getElementById("login-container");
const resetBtn = document.getElementById("cancel");
const submitBtn = document.getElementById("login");
const checkBtn = document.getElementById("show");

function validateEmail() {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginForm.un.value)) {
		return (true)
	}
	else if (loginForm.un.value === '') {
		return (true)
	}
    else {
		return (false)
	}
}	

submitBtn.addEventListener("click", (e) => {
    const un = loginForm.un.value;
    const psw = loginForm.psw.value;
	const container = document.querySelector("#username");
	validateEmail();
	
	if (validateEmail() === false) {
		const msg = document.createTextNode(`Invalid Email!`);
		const p = document.createElement('p');
		p.appendChild(msg);
		container.appendChild(p);		
	}
    else if (un === "pachecozhaira@gmail.com" && psw === "2003") {
        alert("You have login successfully!");

    } 
	else if (un === '' || psw === '') {
		alert("Please input username or password");
		clearForm();
	}

	else {
        alert("Login failed!");
		clearForm();
    }
});

function clearForm() {
	loginForm.un.value = "";
    loginForm.psw.value = "";
};

resetBtn.addEventListener("click", (e) => {
	resetFunction();
	removeFunction();
});	

function resetFunction() {
	 document.getElementById("login-container").reset();
}

function removeFunction() {
	const element = document.querySelector("p");
	element.remove();
}

function show() {
  const s = document.getElementById("pass");
  if (s.type === "password") {
    s.type = "text";
  } else {
    s.type = "password";
  }
}

checkBtn.addEventListener("click", (e) => {
	show();
});	
