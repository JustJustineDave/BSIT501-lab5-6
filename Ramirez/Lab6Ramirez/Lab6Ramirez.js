const submitBtn = document.getElementById('sort');

const container = document.getElementById('textboxes');

const sort = document.getElementById('array_user');

var array = [];

var toggle = true;

function createbox(count){
    var box = document.createElement("input");
    box.setAttribute("type","text");
    box.setAttribute("id",count);
    container.appendChild(box);
}



submitBtn.addEventListener('click', () => {
    if (toggle == true){
        for (var i = 0; i < sort.value; i++) {
            createbox(i);
        }
        toggle = false;
    } else {
        for (var i = 0; i < sort.value; i++) {
            array[i] = document.getElementById(i).value;
            array.sort();
            document.getElementById("text").innerHTML = "sorted array: " + array.join(" ");
        }
    }

    
});