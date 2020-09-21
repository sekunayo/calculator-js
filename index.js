function display(num) {
    let arr = document.getElementById("display").innerText;
    function convertNumbers(Array, cumulator) {
        for (let i = 0; i < Array.length; i++) {
            cumulator.push(parseFloat(Array[i]));
        }
    }
    if (num == "AC") {
        document.getElementById("display").innerText = 0;
    } else if ((num == "=") && (arr.includes("+")) && (arr.includes("."))) {
        let array = arr.split("+");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        for (let i = 0; i < arrays.length; i++) {
            total += arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } else if (num == "=" && arr.includes("+")) {
        let array = arr.split("+");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        for (let i = 0; i < arrays.length; i++) {
            total += arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } else if ((num == "=") && (arr.includes("-")) && (arr.includes("."))) {
        let array = arr.split("-");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        for (let i = 0; i < arrays.length; i++) {
            total = arrays[0] - arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } else if (num == "=" && arr.includes("-")) {
        let array = arr.split("-");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        for (let i = 0; i < arrays.length; i++) {
            total = arrays[0] - arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } else if ((num == "=") && (arr.includes("/")) && (arr.includes("."))) {
        let array = arr.split("/");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        for (let i = 0; i < arrays.length; i++) {
            total = arrays[0] / arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } else if (num == "=" && arr.includes("/")) {
        let array = arr.split("/");
        let arrays = [];
        convertNumbers(array, arrays);
        for (let i = 0; i < arrays.length; i++) {
            let total = arrays[0] / arrays[i];

            document.getElementById("display").innerHTML = total;
        }
    } else if ((num == "=") && (arr.includes("*")) && (arr.includes("."))) {
        let array = arr.split("*");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        for (let i = 0; i < arrays.length; i++) {
            total = arrays[0] * arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } else if (num == "=" && arr.includes("*")) {
        let array = arr.split("*");
        let arrays = [];
        convertNumbers(array, arrays);
        for (let i = 0; i < arrays.length; i++) {
            let total = arrays[0] * arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } else {
        document.getElementById("display").innerText = document.getElementById("display").innerText + num;
    }
    let container = document.getElementById("display");
    container.scrollLeft = container.scrollWidth;
}