let box = document.getElementById("first");

function generateRandomVal() {
    return Math.floor(Math.random() * 256);
}

box.addEventListener("mousedown", function () {
    var r = generateRandomVal();
    var g = generateRandomVal();
    var b = generateRandomVal();

    var randomColor = "rgb(" + r + "," + g + "," + b + ")";

    box.style.backgroundColor = randomColor;
});

let box1 = document.getElementById("second");

box1.addEventListener("mousedown", function (e) {
    var r = generateRandomVal();
    var g = generateRandomVal();
    var b = generateRandomVal();
    console.log(e);
    e.stopPropagation();
    var randomColor = "rgb(" + r + "," + g + "," + b + ")";

    box1.style.backgroundColor = randomColor;
});
