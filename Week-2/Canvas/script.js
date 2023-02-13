console.log("sanity");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

console.log("ctx", ctx);

// FILL THE WHOLE CANVAS
ctx.beginPath();
ctx.fillStyle = "gold";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// DRAW A TRIANGLE
// I will take my ctx variable which now holds all
// canvas settings and drawing methods

ctx.strokeStyle = "hotpink"; // color of the pen
ctx.fillStyle = "hotpink";
ctx.lineWidth = 5; // thickness of the pen

ctx.beginPath(); // get ready to draw
ctx.moveTo(10, 20);
ctx.lineTo(490, 300);
ctx.lineTo(10, 300);
// ctx.lineTo(10, 20);
ctx.closePath();
ctx.fill();
ctx.stroke();

// BIG CIRCLE
// ctx.arc(x, y, radius, startangle (in radian), endangle (randian))
ctx.beginPath();
ctx.fillStyle = "skyblue";
ctx.arc(300, 200, 80, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

// SMALLER CIRCLE
ctx.beginPath();
ctx.fillStyle = "lemonchiffon";
ctx.arc(300, 200, 40, 0, Math.PI * 2);
ctx.fill();

// RECTANGLE
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.rect(400, 20, 80, 50);
ctx.stroke();

// CLEAR THE WHOLE CANVAS
ctx.clearRect(0, 0, 100, 100);
// document.body.addEventListener("mousemove", function (e) {
//     console.log("e.pageX, e.pageY", e.pageX, e.pageY);
// });
