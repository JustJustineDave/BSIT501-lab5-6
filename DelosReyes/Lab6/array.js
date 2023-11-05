const arrayy = document.getElementById('array-size');
const sortbox = document.getElementById('sortbox');
const sort = document.getElementById('sort');
var array = [];
var ray = true;

function create(nadine){
	var inputElement = document.createElement("input");
	inputElement.setAttribute("type","text");
	inputElement.setAttribute("id",nadine);
	sort.appendChild(inputElement);
}

sort.addEventListener ('click', () => {
	if (ray == true){
		for(i =0; i < arrayy.value; i++){
			create(i);
		}
			ray = false;
		} else if (ray == false){
			for(i =0; i < arrayy.value; i++){
				array[i] = document.getElementById(i).value;
				array.sort();
				document.getElementById("text").innerHTML = "Sorted Array: " + array.join(" ");
		}
	}
});
