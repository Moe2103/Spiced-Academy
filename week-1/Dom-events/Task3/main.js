let box = document.getElementById("box");

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

box.addEventListener("mouseup", function () {
    var r = generateRandomVal();
    var g = generateRandomVal();
    var b = generateRandomVal();

    var randomColor = "rgb(" + r + "," + g + "," + b + ")";

    box.style.backgroundColor = randomColor;
});
