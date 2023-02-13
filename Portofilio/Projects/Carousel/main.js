const images = document.getElementsByTagName("img");

const dots = Array.from(document.getElementsByClassName("dot"));

const imagesArr = Array.from(images);

let index = 0;
let timeoutId;

function moveImages() {
    timeoutId = setTimeout(() => {
        imagesArr[index].classList.remove("onscreen");
        imagesArr[index].classList.add("hidden-left");
        //remove the selected class
        dots[index].classList.remove("selected");

        index++;
        if (index === imagesArr.length) {
            index = 0;
        }
        imagesArr[index].classList.add("onscreen");
        //Add selected class
        dots[index].classList.add("selected");

        moveImages();
    }, 3000);
}
moveImages();

document.addEventListener("transitionend", (event) => {
    const imageElemnt = event.target;
    if (imageElemnt.classList.contains("hidden-left")) {
        imageElemnt.classList.remove("hidden-left");
    }
});

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("Click", () => {
        console.log(i);
        imagesArr[index].classList.remove("onscreen");
        imagesArr[index].classList.add("hiddenleft");
        dots[index].classList.remove("selected");

        index = i;
        imagesArr[i].classList.add("onscreen");
        dots[i].classList.add("selected");
        console.log(imagesArr[i]);

        clearTimeout(timeoutId);
        moveImages();
    });
}
