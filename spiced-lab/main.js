// 1. Erstelle ein Hamburger Icon
// 2. Erstelle <a mit Settings, Pricing, Upgrade, Subscribe.
// 3. Erstelle ein close button was auf addEventListener hört und das Hamburger menu schließt
// 3. Erstelle ein addEventListener was beim klicken den Hamburger icon menu öffnet von rechts nach links mit den <a paragrahpen drine.
// 4. Erstele ein addEventListener was beim raus klicken vom Hamburger icon das Menü verschwinden lässt von links nach rechts.

//HTML
// 1. Make sure you have a hamburger menu item with <img id=""></img>
// 2. create a container like <nav></nav>
// 3. have <a> tags for the clickable Text
// 4.for close button you could use an image and style it accordingly ( add addEventListener to it)
// 5. use a spearate eleemt  as backdrop next to sidebar

//css
//1. have a class which transform the side to the right

var openmenu = document.getElementById("hamburger");
var backdrop = document.getElementById("backdrop");
var close = document.getElementById("close-button");
var sidebar = document.querySelector(".side-bar");

openmenu.addEventListener("click", function () {
    backdrop.classList.toggle("hidden");
});

close.addEventListener("click", function () {
    backdrop.classList.toggle("hidden");
});

//openmenu.addEventListener("click", function () {
//  sidebar.classList.toggle("hidden");
//});
