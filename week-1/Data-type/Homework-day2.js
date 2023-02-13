var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

for (var b in a) {
    var value = a[b];
    console.log(value, b);
}

for (var i = 0; i < 11; i++) {
    console.log(i);
}

function logType(data) {
    if (typeof data === "undefined") {
        console.log("undefined!");
    } else if (data === null) {
        console.log("null!");
    } else if (typeof data === "object" && Array.isArray(data) == true) {
        console.log("array!");
    } else if (typeof data === "object") {
        console.log("object!");
    } else if (typeof data == "bigint") {
        console.log("bigint!");
    } else if (isNaN(data) === true) {
        console.log("not a number!");
    } else if (typeof data == "number") {
        console.log("number!");
    } else if (typeof data == "string") {
        console.log("string!");
    } else if (typeof data == "boolean") {
        console.log("boolean!");
    } else if (typeof data == "function") {
        console.log("function!");
    } else if (Array.isArray(data) == true) {
        console.log("array!");
    } else {
        console.log("I have no idea!");
    }
}

console.log(logType);
