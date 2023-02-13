// // function max(num1, num2) {
// //     if (num1 > num2) {
// //         return num1;
// //     } else {
// //         return num2;
// //     }
// // }

// // console.log("greater:", max(99, 1));

// // function createBear() {
// //     return {
// //         isBear: true,
// //     };
// // }

// // var billy = createBear();
// // console.log("billy", billy);

// // function Bear() {

// // }

// //Exercises

// // function Rectangle(width, height) {
// //     this.width = width;
// //     this.height = height;

// //     this.getArea = function () {
// //         return this.width * this.height;
// //     };
// // }

// // function Square(number1) {
// //     this.width = number1;
// //     this.height = number1;

// //     var getarea = Rectangle.prototype.getArea();
// // }

// // var square = new Square(4);
// // square.getArea(); //16

// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }

// Rectangle.prototype.getArea = function () {
//     return this.height * this.width;
// };

// function Square(length) {
//     this.width = length;
//     this.height = length;
// }

// Square.prototype.getArea = Rectangle.prototype.getArea;

// var r = new Rectangle(4, 5);
// var s = new Square(4);

// console.log(r.getArea());
// console.log(s.getArea());

//___________________________

function invertCase(String) {
    return String.toUpperCase();
}

//invertCase.prototype.toUpperCase;

console.log(invertCase("hallo"));
