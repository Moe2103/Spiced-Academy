function each(para1, para2) {
    console.log("------");

    if (typeof para1 === "object") {
        if (Array.isArray(para1)) {
            console.log("is an Array");

            for (var i = 0; i < para1.length; i++) {
                //console.log("Para1[i]:", para1[i]);
                //console.log("i: ", i);
                para2(para1[i], i);
            }
        } else {
            console.log("in an Object");

            //For me to do
        }
    } else {
        console.log("i dont care");
    }
}

each(["a", "b"], function (val, idx) {
    console.log("The value of item " + idx + " is " + val);
});
