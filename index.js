function display(num) {
    var arr = document.getElementById("display").innerText;
    if (num == "AC") {
        document.getElementById("display").innerText = 0;
    }
    else if ((num == "=") && (arr.includes("+")) && (arr.includes("."))) {
        let array = arr.split("+");
        let arrays = [];
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            arrays.push(parseFloat(array[i]));
        }
        for (let i = 0; i < arrays.length; i++) {
            total += arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } 
    else if (num == "=" && arr.includes("+")) {

        let array = arr.split("+");
        let arrays = [];
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            arrays.push(parseInt(array[i]));
        }
        for (let i = 0; i < arrays.length; i++) {
            total += arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } 
    else if ((num == "=") && (arr.includes("-")) && (arr.includes("."))) {
        let array = arr.split("-");
        let arrays = [];
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            arrays.push(parseFloat(array[i]));
        }
        for (let i = 0; i < arrays.length; i++) {
            total = arrays[0] - arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } 
    else if (num == "=" && arr.includes("-")) {
        let array = arr.split("-");
        let arrays = [];
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            arrays.push(parseInt(array[i]));
        }
        for (let i = 0; i < arrays.length; i++) {
            total = arrays[0] - arrays[i];
            document.getElementById("display").innerHTML = total;
        }
    } 
    else if ((num == "=") && (arr.includes("/")) && (arr.includes("."))) {
        let array = arr.split("/");
        let arrays = [];
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            arrays.push(parseFloat(array[i]));
        }
        for (let i = 0; i < arrays.length; i++) {
            total = arrays[0] / arrays[i];
            document.getElementById("display").innerHTML = total.toFixed(4);
        }
    } 
    else if (num == "=" && arr.includes("/")) {
        let array = arr.split("/");
        let arrays = [];
        for (let i = 0; i < array.length; i++) {
            arrays.push(parseInt(array[i]));
        }
        for (let i = 0; i < arrays.length; i++) {
           let total = arrays[0] / arrays[i];

            document.getElementById("display").innerHTML = total.toFixed(4);
        }
    } 
    else if ((num == "=") && (arr.includes("*")) && (arr.includes("."))) {
        let array = arr.split("*");
        let arrays = [];
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            arrays.push(parseFloat(array[i]));
        }
        for (let i = 0; i < arrays.length; i++) {
            total = arrays[0] * arrays[i];
            document.getElementById("display").innerHTML = total.toFixed(4);
        }
    } 
    else if (num == "=" && arr.includes("*")) {
        let array = arr.split("*");
        let arrays = [];
        for (let i = 0; i < array.length; i++) {
            arrays.push(parseInt(array[i]));
        }
        for (let i = 0; i < arrays.length; i++) {
           let total = arrays[0] * arrays[i];
            document.getElementById("display").innerHTML = total.toFixed(4);
        }
    } 
    else {
        document.getElementById("display").innerText = document.getElementById("display").innerText + num;
    }
}
