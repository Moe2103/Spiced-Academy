let box = document.getElementById("blackbox");
const onMouseMove = function (e) {
    box.style.left = e.pageX - 50 + "px";
    box.style.top = e.pageY - 50 + "px";
};
document.addEventListener("mousemove", onMouseMove);

// let Mouse = document.getElementById("Mouse");
// //const colourchange = (Mouse.style.borderColor = "red");
// //
// document.addEventListener("mousemove", function(){
//  document.bgColor('red')
// };
