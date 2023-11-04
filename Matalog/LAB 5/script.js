const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const resetBtn = document.getElementByClassName('btnl');
const submitBtn = document.getElementByClassName('btn');

function getInfo() (
	var username = document.getElementById('email').value;
	var pass = document.getElementById('password').value;
	if (email == matalogkyleee@gmail.com && pass ==kylel01) (
		alert("Login successful'")
		window.location.assign("userlogin.html")
		else (
			alert("Login unsuccessful'")
		)
	)
)

submitBtn.addEventListener('Click', ()=> (
	let result = getInfo();
	));