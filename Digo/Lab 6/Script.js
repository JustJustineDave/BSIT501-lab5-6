const size = document.getElementById('size');
const sortbox  = document.getElementById('sortbox');
const btn = document.getElementById('btn');
var array = [];
var point = true;
function create(basta){
	var inputElement = document.createElement("input");
	inputElement.setAttribute("type", "text");
	inputElement.setAttribute("id", basta);
	sortbox.appendChild(inputElement);
}
btn.addEventListener('click', () => {
	if(!isNaN(size.value) && size.value.length > 0 && size.value > 1){
		
		if (point == true){
			for(i = 0; i < size.value; i++){
			create(i);
		}
		  point = false;
		}else if (point == false){
			for(i = 0; i < size.value; i++){
				array[i] = document.getElementById(i).value;
				array.sort(function(a,b){return a - b});
				document.getElementById("text").innerHTML = "sorted array: "+ array.join(" ");
			}
		}
	}else {
		alert("all input must be number.");
	}
});