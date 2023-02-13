const fs = require("fs");
const path = require("path");

const pathToCheck = path.join(__dirname, "Projects");
const myProjects = fs.readdirSync(pathToCheck);

// export module with generateProjects function.
module.exports = function generateProjects() {
    let html = "";
    for (let i = 0; i < myProjects.length; i++) {
        html += `<div><a href="/${myProjects[i]}">${myProjects[i]}</a></div>`;
    }
    return `<h1>My Achievement:</h1>` + html;
};
