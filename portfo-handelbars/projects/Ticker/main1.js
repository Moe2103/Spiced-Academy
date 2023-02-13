const headlines = document.getElementById("headlines");

let firstlink = document.querySelector("a");
let widthOfHeadlines = headlines.offsetWidth;
let currentLeftValue = widthOfHeadlines;
let ticker = document.querySelector("ticker");
let id;

function moveLeft() {
    // check if sum of headlines.offsetLeft and firstLink.offsetWidth is smaller than 0
    // if yes, do the following steps:
    // remove the firstLink from headlines
    // append firstLink to headlines with appendChild
    // get the current new first link with querySelector and save it to firstLink variable
    // reset currentLeftValue to 0
    // set headlines.style.left to the new value of currentLeftValue

    if (headlines.offsetLeft + firstlink.offsetWidth < 0) {
        headlines.removeChild(firstlink);
        headlines.appendChild(firstlink);
        firstlink = document.querySelector("a");
        currentLeftValue = 0;
        headlines.style.left = currentLeftValue;
    }
    id = requestAnimationFrame(() => {
        currentLeftValue--;
        headlines.style.left = currentLeftValue + "px";
        moveLeft();
    });
}

moveLeft();

headlines.addEventListener("mouseenter", function () {
    cancelAnimationFrame(id);
});

headlines.addEventListener("mouseleave", function () {
    moveLeft();
});

$.get("http://localhost:8080/ticker.json", function (data) {
    data.forEach((tickerElement) => {
        $("#headlines").append(
            '<a href="' +
                tickerElement.url +
                '">' +
                tickerElement.title +
                "</a>"
        );
    });
});
