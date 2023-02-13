const longText =
    "JavaScript (kurz JS) ist eine Skriptsprache, die ursprünglich 1995 von Netscape für dynamisches HTML in Webbrowsern entwickelt wurde, um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML zu erweitern.[2] Heute wird JavaScript auch außerhalb von Browsern angewendet, etwa auf Servern und in Microcontrollern.[3][4]";
const message = document.getElementById("message");
let charIndex = 0;

message.addEventListener("keydown", (event) => {
    // prevent event's default behaviour
    event.preventDefault();
    // set next char from string into textContent
    message.textContent += longText.charAt(charIndex);
    charIndex++;
});
