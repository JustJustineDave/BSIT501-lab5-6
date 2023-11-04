		const userInput = document.getElementById('Userbox');
const passInput = document.getElementById('passbox');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right')
const emailForm =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function loginButton(){
	if(!userInput.value.match(emailForm)){
		document.getElementById('error').textContent = "Invalid Input. PLease input correct email format";	
	}
	else if(userInput.value == "Testme@dummy.com" && passInput.value == ""){
			alert('PLEASE INPUT USERNAME OR PASSWORD');
			}
			else if(userInput.value == "Testme@dummy.com" && passInput.value == "123"){
					alert('Login Successful');
				}else{
					alert('Login Failed');
				}
		
				
}
function resetButton(){
	document.getElementById(userInput.value = "");
	document.getElementById(passInput.value = "");
}
rightButton.addEventListener('click', () => {
	loginButton();
});
leftButton.addEventListener('click', () => {
	resetButton()
});