function sum(Number1, Number2) {
    console.log(Number1 + Number2);
}

sum(2, 2);

function waitThenRun(function wait() {
    console.log("hello");
}, 1500);

waitThenRun;

setTimeout(function delayedLog() {
    console.log("delayed log");
}, 2000);



