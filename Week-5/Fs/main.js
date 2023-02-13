const fs = require("fs");
const path = require("path");

const myPath = __dirname;
//console.log("myPath: ", myPath);

const baseFilePath = path.join(myPath, "files");
//console.log("baseFilePath: ", baseFilePath);

// const stat = fs.statSync(baseFilePath);
// console.log("stat in Sync: ", stat);

// function logSizes(myPath) {
//     const files = fs.readdirSync(myPath, { withFileTypes: true });
//     console.log("My files: ", files);
//     for (const element of files) {
//         if (element.isFile()) {
//             const filePath = myPath + "/" + element.name;
//             fs.stat(filePath, (err, stats) => {
//                 if (err) {
//                     console.log("Error in stat");
//                 }
//                 console.log(filePath + ": " + stats.size + " bytes.");
//             });
//         }
//         if (element.isDirectory()) {
//             //console.log("Dir: ", element);
//             let newDirPath = myPath + "/" + element.name;
//             console.log("Dir: ", newDirPath);
//             logSizes(newDirPath);
//         }
//     }
// }

// logSizes(baseFilePath);

function mapSizes(myPath) {
    const object = {};
    const directory = fs.readdirSync(myPath, { withFileTypes: true });
    for (const element of directory) {
        if (element.isFile()) {
            let fileName = element.name;
            let fileSize = fs.statSync(myPath).size;

            object[fileName] = fileSize;
        } else {
            let name = object.name;
            let value = mapSizes(myPath);

            object[name] = value;
        }
        if (element.isDirectory()) {
            const path = path.join(myPath, `${element.name}`);
            mapSizes(path);
        }
        return object;
    }
}

console.log(mapSizes(myPath));
