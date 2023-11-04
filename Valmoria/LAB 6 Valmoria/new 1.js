document.getElementById("sortButton").addEventListener("click", function () {
    const inputArray = document.getElementById("arrayInput").value.split(",");
    const sortedArray = inputArray.map(Number).sort((a, b) => a - b);

    const boxContainer = document.getElementById("boxContainer");
    boxContainer.innerHTML = '';

    sortedArray.forEach(item => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.textContent = item;
        boxContainer.appendChild(box);
    });
});