

// Get All Value
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');




// Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the input
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === '') {
        // show error
        // add error
        window.alert('Please input E-mail or Password');
        setErrorFor(email, 'Invalid input. Please input correct e-mail format');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Invalid input. Please input correct e-mail format');
    } else {
        //add success class
        setSuccessFor(email);
    }
   

    if(passwordValue === '') {
        // show error
        // add error
		setErrorFor(password, 'Password cannot be blank');
	} else if(!isPassword(passwordValue)) {
        window.alert('Login Failed!!!');
        setErrorFor(password, 'Password must be atleast 8 characters');
	} else {
        setSuccessFor(password);
        window.alert('Login Success');
    }

}


// Error Function
function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small =formControl.querySelector('small');

    //add error message
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

// Success Function
function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    formControl.className = 'form-control success';
}

// E-mail Validation
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function for 8 characters
function isPassword(password) {
    return password.length >=8;
}


// Form Reset Button State
resetBtn.addEventListener('click', (e) => {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    //Set Value
    email.value = '';
    password.value = '';
});



