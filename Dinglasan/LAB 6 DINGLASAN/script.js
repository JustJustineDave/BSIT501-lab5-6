
// CREATING INPUT BOXES
function createInputBoxes() {
    event.preventDefault(); // prevent form submission

    // GETTING ALL THE VALUE
    var arraySize = document.getElementById("arraySize").value;
    var inputBoxesDiv = document.getElementById("inputBoxes");
    inputBoxesDiv.innerHTML = ""; // clear previous content
  
    for (var i = 0; i < arraySize; i++) {
      var inputBox = document.createElement("input");
      inputBox.type = "number"; // accepts only numerical number
      inputBox.placeholder = "Enter number " + (i + 1);
      inputBox.classList.add("input-field");
      inputBoxesDiv.appendChild(inputBox); // calls the appenChild
    }
  }
  
  function sortNumbers() {
    event.preventDefault(); // prevent form submission
  
    var inputBoxes = document.getElementsByClassName("input-field");
    var numbersArray = []; // STORE NUMERICAL VALUES ENTERED BY THE USERS
    for (var i = 0; i < inputBoxes.length; i++) {
      if (inputBoxes[i].value !== "") { // check if the box is empty string
        numbersArray.push(Number(inputBoxes[i].value));
      }
    }
    var sortedArray = numbersArray.sort(function(a, b){return a - b}); // ASCENDING ORDER AND ENSURES SORTING IS DONE NUMERICALLY
    
    // DISPLAY SORTED ARRAY STRING
    document.getElementById("result").innerHTML = "Sorted numbers: " + sortedArray;
  }
  
  // EVENT LISTENER
  document.getElementById("arraySize").addEventListener('input', createInputBoxes);
  