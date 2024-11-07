function emptyArrayElements() {
    let arr = document.getElementById("arrayElements").value.split(',');


    arr.length = 0;

    document.getElementById("result").innerText = `Array is now: [${arr}]`;
}
