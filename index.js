function display(num) {
    var figure = num.innerText;
    if(num == "AC"){
        document.getElementById("display").innerText = 0;
    }
    else if(num == "="){
        document.getElementById("display").innerText = eval(document.getElementById("display").innerText)
    }
    else {
        document.getElementById("display").innerText = document.getElementById("display").innerText + num;
    }
}