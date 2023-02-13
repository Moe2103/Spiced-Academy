// getting the columns and the hole

var column = Array.from(document.querySelectorAll(".column"));
var holesElement = Array.from(document.querySelectorAll(".hole"));
var button = document.getElementById("button");

let playerToMove = 1;
let numberOfColumns = 7;
let numerOfRows = 6;
let gameResult;

let holes = [
    0,
    0,
    0,
    0,
    0,
    0, // first column
    0,
    0,
    0,
    0,
    0,
    0, // second column
    0,
    0,
    0,
    0,
    0,
    0, // third column
    0,
    0,
    0,
    0,
    0,
    0, // fourth column
    0,
    0,
    0,
    0,
    0,
    0, // fifth column
    0,
    0,
    0,
    0,
    0,
    0, // sixth column
    0,
    0,
    0,
    0,
    0,
    0, // seventh column
];

// adding eventlistener.

for (let columnIdx = 0; columnIdx < column.length; columnIdx++) {
    column[columnIdx].addEventListener("click", () => {
        fillColumn(columnIdx);
        var win = checkColumnWin(columnIdx);

        if (win === true) {
            alert("you won");

            console.log(win);
        }

        checkForDraw();
        //1.fillColumn(i) and save results in variable
        //2. check if filling a colum was succesful on based on
        // if it was succesfull: checkcolumnwin(),
        //checkforrowwin(),
        //checkfordiagonawin(),
        //checkfordraw()
        // check if game has enden and log winner or draw
        // if it was not succesfull
        // we do nothing
        //3.
    });
}

function fillColumn(columnIdx) {
    const startIdx = columnIdx * 6; // i multiplies by the number of rows
    const endIdx = startIdx + 6; // startd + number of rows

    for (let i = startIdx; i < endIdx; i++) {
        if (holes[i] === 0) {
            holes[i] = playerToMove;
            holesElement[i].classList.add("player" + playerToMove);
            if (playerToMove === 1) {
                playerToMove = 2;
            } else {
                playerToMove = 1;
            }
            return true;
        }
    }
}

// function checkColumnWin=(columnIdx){
//     const startIdx

// }

function checkColumnWin(columnIdx) {
    const startIdx = columnIdx * 6; // columnIdx multiplies by the number of rows;
    const endIdx = startIdx + 6; // startIdx + number of rows
    let countChips = 0;
    let lastChip;

    for (let i = startIdx; i < endIdx; i++) {
        if (holes[i] === 0) {
            return false;
        }

        if (holes[i] !== lastChip) {
            lastChip = holes[i];
            countChips = 1; // resetting countChips
        } else {
            countChips++;
        }
        if (countChips === 4) {
            return true;
        }
    }
    return false;
}

// Check for draw

function checkForDraw() {
    if (holes.includes(0)) {
        console.log("not a draw");

        return false;
    } else {
        setTimeout(() => {
            alert("Its a draw");
        }, 50);
        console.log("draw");
        return true;
    }
}

// restart Button

button.addEventListener("click", function () {
    location.reload();
});
