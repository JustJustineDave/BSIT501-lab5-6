const number = document.getElementById('number');
const sorted = document.getElementById('sorted');
const sort = document.getElementById('sort');
var array = [];
var num = true;

function create(sorting){
	var inputElement = document.createElement("input");
	inputElement.setAttribute("type","text");
	inputElement.setAttribute("id",sorting);
	sorted.appendChild(inputElement);
}

sort.addEventListener ('click', () => {
	if (num == true){
		for(i =0; i < number.value; i++){
			create(i);
		}
			num = false;
		} else if (num == false){
			for(i =0; i < number.value; i++){
				array[i] = document.getElementById(i).value;
				array.sort();
				document.getElementById("text").innerHTML = "Sorted Array: " + array.join(" ");
		}
	}
});