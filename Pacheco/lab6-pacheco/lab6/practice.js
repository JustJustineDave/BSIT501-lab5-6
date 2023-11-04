let funcArr = [
    function() {
        alert('I am function 1!');
    },
    
    function() {
        alert('I am function 2!');
    },
   
    function() {
        alert('I am function 3!');
    },
    
    function() {
        alert('I am function 4!');
    },
    
    function() {
        alert('I am function 5!');
    }
];

let i = 0;

window.onload = function() {
    let btn = document.getElementsByTagName('button')[0];
    btn.onclick = function() {
        funcArr[i++ % funcArr.length](); // first call function and then, increment the value of i
    }
}