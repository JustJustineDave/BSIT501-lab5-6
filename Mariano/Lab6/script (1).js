const input = document.getElementById('sizee');
const sortbox = document.getElementById('sortbox');
const btns = document.getElementById('sort');
var array =[];
var point = true;
function create(roselle){
	var inputElement = document.createElement("input");
	inputElement.setAttribute("type","text");
	inputElement.setAttribute("id",roselle);
	sortbox.appendChild(inputElement);
}
sort.addEventListener('click', () => {
	if (point == true){
	for(i = 0; i <sizee.value; i++){
		create(i);
	}
		point = false;
	}else if (point == false){
		for(i = 0; i < sizee.value; i++){
			array[i] = document.getElementById(i).value;
			array.sort();
			document.getElementById("text").innerHTML = "Sorted Array: "+ array.join(" ");	
		}	
	}
});