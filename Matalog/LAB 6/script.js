document.getElementById("sortButton").addEventListener("click", function () {
    const inputArray = JSON.parse(document.getElementById("arrayInput").value);
    const sortedArray = inputArray.sort((a, b) => a.length - b.length);

    document.getElementById("sortedArray").textContent = "Sorted Array: " + JSON.stringify(sortedArray);
});