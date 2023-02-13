//exierces

//Write a function that expects a string representing a selector to be passed as a parameter.
//The function should find all the elements in the document that match the selector and change
//their style so that the text they contain is italic, underlined, and bold.

// exercise 1

function styleThisText(selector) {
    const elements = Array.from(document.querySelectorAll(selector));

    elements.forEach((e) => {
        e.style.fontStyle = "italic";
        e.style.fontWeight = "bold";
        e.style.textDecoration = "underline";
    });
}

// exercise 2

function getAsArray(className) {
    return Array.from(document.getElementsByClassName(className));
}

// exercise 3

function insertAwesomeElement() {
    const body = document.body;
    const h2 = document.createElement("h2");
    h2.style.position = "fixed";
    h2.style.zIndex = "2147483647";
    h2.style.left = "20px";
    h2.style.top = "100px";
    h2.style.fontSize = "200px";
    h2.textContent = "AWESOME";

    body.appendChild(h2);
}

styleThisText();
