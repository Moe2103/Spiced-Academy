const textArea = document.querySelector("textarea");
const storageKey = "text";

const save = function () {
    textArea.addEventListener("input", function () {
        localStorage.setItem(storageKey, textArea.value);
    });

    textArea.value = localStorage.getItem(storageKey);
};

save();
