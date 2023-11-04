const array_size = document.getElementById('size');
const btn = document.getElementById('submit');
const container = document.getElementById('array_container')
var bool = true;
var array = [];
var array1 = [];
function InputCreate(num) {
var inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("id", num);
container.appendChild(inputElement);
}

function validateInput() {
	if(isNaN(array_size.value)) {
		alert('The input is not a number!');  
		window.location.reload();
		return false;
	} else {
        	return true;
    }
}

btn.addEventListener('click', () =>{
    if(validateInput() && bool == true) {
        for(i = 0; i < array_size.value; i++) {
            InputCreate(i);
        }
    bool = false;
    } else if (bool == false) {
        //for (let i = 0; i < array_size.value; i++) {
          //array[i] = document.getElementById(i).value;
          //array.sort();
          //document.getElementById("text").innerHTML ="Sorted Array: " + array.join(" ");
        //}
        for (var i = 0; i < array_size.value; i++) {
            array[i] = document.getElementById(i).value;
        }
        var length = array.length;
        for (var i = 0; i < length - 1; i++) {
          for (var j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
              var temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
            }
          }
        }
        document.getElementById("text").innerHTML ="Sorted Array: " + array.join(" ");
    }   
});