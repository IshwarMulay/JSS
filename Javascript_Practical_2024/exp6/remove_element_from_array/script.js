function removeArrayElement() {
    const array = document.getElementById("arrayInput").value.split(',');
    const elementToRemove = document.getElementById("elementInput").value;
    
    
    const index = array.indexOf(elementToRemove);

    if (index !== -1) {
        array.splice(index, 1);
        document.getElementById("result").textContent = `Array after removal: [${array.join(', ')}]`;
    } else {
        document.getElementById("result").innerText = "Element Not Found!";
    }
}
