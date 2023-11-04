const myForm = document.getElementById("form-BOX");
const sortBtn = document.getElementById("sorter");

var SQUARES = 0;

let arrayNum = [];
let btn = 1;

function inputBoxes() {
	SQUARES = myForm.num.value;
	for(let i=0; i<SQUARES; i++) {
		const Kahon = document.createElement('input');
		Kahon.setAttribute("type", "number");
		Kahon.setAttribute("class", "containerNum");
		Kahon.setAttribute("name", "arrayValue");
		Kahon.id = 'container' + i;
		myForm.appendChild(Kahon);	
	}
}

sortBtn.addEventListener("click", (e) => {
	if (btn == 1) {
		inputBoxes();
		btn = 2;
	}
	else if (btn == 2) {
		sortFunc();
	}
});	


function sortFunc() {
	for(let i=0; i<SQUARES; i++) {
		arrayNum[i] = document.getElementById('container'+i).value;	
	}
	arrayNum.sort(function(a, b){return a-b});
	
	const msg = document.createTextNode(arrayNum);
	const p = document.createElement('p');
	p.appendChild(msg);
	myForm.appendChild(p);
}
