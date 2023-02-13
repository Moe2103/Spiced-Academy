const express = require("express");
const path = require("path");
const app = express();
const generateProjects = require("./homepage.js");
const cookieParser = require("cookie-parser");
let requesturl = "";

const basicAuth = require("basic-auth");

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "moin" || creds.pass != "123456") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(auth);

app.use((req, res, next) => {
    if (req.url.includes("favicon.png")) {
        res.sendFile(path.join(__dirname, "images", "favicon.png"));
    }
});

app.use(cookieParser());

// No need for it?!
// app.use((req, res, next) => {
//     if (req.url.includes("favicon.ico")) {
//         res.sendFile(path.join(__dirname, "cookies", "favicon.ico"));
//     } else {
//         next();
//     }
// });

app.use((req, res, next) => {
    if (req.url.startsWith("/cookies")) {
        console.log(req.url);
        next();
    } else {
        if (req.cookies.YES === "YES") {
            next();
        } else {
            // save information about initial request in a global variable
            res.redirect("/cookies/");
            requesturl = req.url;
            console.log(requesturl);
        }
    }
});

const urlEncodedMiddleware = express.urlencoded({ extended: false });
app.use(urlEncodedMiddleware);

const staticMiddleware = express.static(path.join(__dirname, "Projects"));
app.use(staticMiddleware);

app.get("/", (req, res) => {
    const finalHtml = generateProjects();
    res.send(finalHtml);
});

app.get("/cookies", (req, res) => {
    console.log("cookies:", req.cookie);
    res.send("Cookie Send");
});

app.post("/cookies", (req, res) => {
    res.cookie("YES", req.body.someSelect);
    if (req.body.someSelect === "YES") {
        console.log("redirect to ", requesturl);

        res.redirect(requesturl);
    } else res.redirect("/cookies");

    // res.cookie("accepted", req.body.cookie);
    // if (cookieParser) {
    //     res.setHeader("Location", req.url + "/");
    // } else {
    //     res.setHeader("Location", "/cookies");
    // }
    // if cookie was accepted
    // redirect to the initial page
    // else
    // redirect to /cookies
});

app.listen(8080, () => {
    console.log("express server is running on localhost:8080");
});
