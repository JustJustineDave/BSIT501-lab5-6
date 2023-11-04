const container = document.querySelector('username','password');
const cancelBtn = document.getElementById('cancel');
const submitBtn = document.getElementById('submit');


function CheckForm(YourForm) {
  if(YourForm.password.value == "" || YourForm.password.value == null) {
    alert ("Enter your Password!");
    return(false);
  }
  else{
    alert ("Login Successful!!");
    return(true);
  }
}
function CheckForm(YourForm) {
  if(YourForm.email.value == "" || YourForm.email.value == null) {
    alert ("Enter your Email and Password!");
    return(false);
  }
  else{
    alert ("Login Successful!!");
    return(true);
  }
}






