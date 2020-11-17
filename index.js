function display(num) {
    let arr = document.getElementById("display").innerText;
    let convertNumbers = (Array, cumulator) => {
        for (let i = 0; i < Array.length; i++) {
            cumulator.push(parseFloat(Array[i]));
        }
    }
    function add(Array){
        document.getElementById("display").innerHTML  = Array.reduce( (acc,cu) => acc + cu,0)
    }
    function subtract(Array){
       for(let i = 0; i < Array.length; i++){        
             document.getElementById("display").innerHTML  = Array[0] - Array[i];
         }
    }
    function divide(Array){
        for(let i = 0; i < Array.length; i++){        
              document.getElementById("display").innerHTML  = Array[0] / Array[i];
          }
     }

     function multiply(Array){
        for(let i = 0; i < Array.length; i++){        
              document.getElementById("display").innerHTML  = Array[0] * Array[i];
          }
     }
 
    if (num == "AC") {
        document.getElementById("display").innerText = 0;
    }
     else if ((num == "=") && (arr.includes("+")) && (arr.includes("."))) {
        let array = arr.split("+");
        let arrays = [];
        convertNumbers(array, arrays);
         add(arrays);
    } else if (num == "=" && arr.includes("+")) {
        let array = arr.split("+");
        let arrays = [];
        convertNumbers(array, arrays);
        add(arrays);
    } else if ((num == "=") && (arr.includes("-")) && (arr.includes("."))) {
        let array = arr.split("-");
        let arrays = [];
        convertNumbers(array, arrays);
        subtract(arrays);
    } else if (num == "=" && arr.includes("-")) {
        let array = arr.split("-");
        let arrays = [];
        convertNumbers(array, arrays);
        subtract(arrays);
    } else if ((num == "=") && (arr.includes("/")) && (arr.includes("."))) {
        let array = arr.split("/");
        let arrays = [];
        convertNumbers(array, arrays);
        divide(arrays);
    } else if (num == "=" && arr.includes("/")) {
        let array = arr.split("/");
        let arrays = [];
        convertNumbers(array, arrays);
        divide(arrays);
    } else if ((num == "=") && (arr.includes("*")) && (arr.includes("."))) {
        let array = arr.split("*");
        let arrays = [];
        convertNumbers(array, arrays);
        multiply(arrays);
    } else if (num == "=" && arr.includes("*")) {
        let array = arr.split("*");
        let arrays = [];
        convertNumbers(array, arrays);
        multiply(arrays);
    } else {
        document.getElementById("display").innerText = document.getElementById("display").innerText + num;
    }
    let container = document.getElementById("display");
    container.scrollLeft = container.scrollWidth;
}