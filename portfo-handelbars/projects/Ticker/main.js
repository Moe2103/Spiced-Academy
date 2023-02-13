// Jquery try

const headlines = $("headlines");
let firstlink = $("a");
let ticker = $("ticker");
let widthOfHeadlines = headlines.offsetWidth;
let currentLeftValue = widthOfHeadlines;
let id;

function moveLeft() {
    if (headlines.offsetLeft + firstlink.offsetWidth < 0) {
        headlines.removechild(firstlink);
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

$(headlines).on("mouseenter", function () {
    cancelAnimationFrame(id);
});

$(headlines).on("mouseleave", function () {
    moveLeft();
});
