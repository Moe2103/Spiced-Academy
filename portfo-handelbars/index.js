const express = require("express");
const path = require("path");
const app = express();
var projectslist = require("./projects.json");

const { engine } = require("express-handlebars");

const { get } = require("express/lib/response");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

//app.use(express.static("./projects"));

const urlEncodedMiddleware = express.urlencoded({ extended: false });
app.use(urlEncodedMiddleware);

app.use(express.static(path.join(__dirname, "projects")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        projectslist,
        showImage: true,
        helpers: {
            getnewstyle: "/style.css",
        },
    });
});

app.get("/projects/:projectDirectory", (req, res) => {
    const projectDirectory = req.params.projectDirectory; // 'kitty-caroussel';
    const selectedProject = projectslist.find((p) => {
        return p.url === projectDirectory;
    });
    console.log(selectedProject);
    if (selectedProject === undefined) {
        res.statusCode = 404;
        res.end("PAGE NOT FOUND");
    } else
        res.render("home", {
            layout: "main",
            projectslist,
            showImage: false,
            selectedProject: selectedProject,
            helpers: {
                getnewstyle: "/NewStyle.css",
            },
        });
});

app.listen(8080, console.log("running at 8080"));
