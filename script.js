// things I need to work on:

// buttons to work

// var element = document.getElementById('element-id');

var numbersNodeList = document.querySelectorAll(".num");
var numbers = Array.prototype.map.call(numbersNodeList, function(element) {
    return element.value;
})

do {
        document.getElementById("display").innerText = document.getElementsByClassName(".num").onclick;
} while (document.getElementById("equal").clicked == false)