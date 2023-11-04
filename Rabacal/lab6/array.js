const input = document.getElementById('input');
const submitButton = document.getElementById('submit');
const container = document.getElementById('container');
var toggle = true;
var array = [];

function createInputElement(num) {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("value", "");
    inputElement.setAttribute("id", num);
    container.appendChild(inputElement);
}

submitButton.addEventListener('click', () => {
    if (toggle == true) {
        for (let i = 0; i < input.value; i++) {
            createInputElement(i);
        }
        toggle = false;
    } else if (toggle == false) {
        for (let i = 0; i < input.value; i++) {
            array[i] = document.getElementById(i).value;
        }
        array.sort();
        document.getElementById("text").innerHTML = "Sorted Array: " + array.join(" ");
    }
});