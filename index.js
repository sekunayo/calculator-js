function display(num) {
    let arr = document.getElementById("display").innerText;
    function convertNumbers(Array, cumulator) {
        for (let i = 0; i < Array.length; i++) {
            cumulator.push(parseFloat(Array[i]));
        }
    }
    Array.prototype.sum = function (){
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            total += this[i];
            document.getElementById("display").innerHTML = total;
        }
        return total;
    }
    Array.prototype.subtract = function (){
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            total = this[0] - this[i];
            document.getElementById("display").innerHTML = total;
        }
        return total;
    }
    Array.prototype.divide = function(){
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            total = this[0] / this[i];
            document.getElementById("display").innerHTML = total;
        }
    }
    Array.prototype.multiply = function(){
        let total = 0;
        for (let i = 0; i < this.length; i++) {
            total = this[0] * this[i];
            document.getElementById("display").innerHTML = total;
        }
    }
 
    if (num == "AC") {
        document.getElementById("display").innerText = 0;
    }
     else if ((num == "=") && (arr.includes("+")) && (arr.includes("."))) {
        let array = arr.split("+");
        let arrays = [];
        convertNumbers(array, arrays);
         arrays.sum();
    } else if (num == "=" && arr.includes("+")) {
        let array = arr.split("+");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        arrays.sum();

    } else if ((num == "=") && (arr.includes("-")) && (arr.includes("."))) {
        let array = arr.split("-");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        arrays.subtract();
    } else if (num == "=" && arr.includes("-")) {
        let array = arr.split("-");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        arrays.subtract();
    } else if ((num == "=") && (arr.includes("/")) && (arr.includes("."))) {
        let array = arr.split("/");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        arrays.divide();
    } else if (num == "=" && arr.includes("/")) {
        let array = arr.split("/");
        let arrays = [];
        convertNumbers(array, arrays);
        arrays.divide();
    } else if ((num == "=") && (arr.includes("*")) && (arr.includes("."))) {
        let array = arr.split("*");
        let arrays = [];
        let total = 0;
        convertNumbers(array, arrays);
        arrays.multiply();
    } else if (num == "=" && arr.includes("*")) {
        let array = arr.split("*");
        let arrays = [];
        convertNumbers(array, arrays);
        arrays.multiply();
    } else {
        document.getElementById("display").innerText = document.getElementById("display").innerText + num;
    }
    let container = document.getElementById("display");
    container.scrollLeft = container.scrollWidth;
}