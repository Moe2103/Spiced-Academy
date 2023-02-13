const http = require("http");

const fs = require("fs");
const parth = __dirname;
const PORT = 8080;

const server = http.createServer((request, response) => {
    request.on("error", (err) => console.log("err in request: ", err));
    response.on("erro", (err) => console.log("err in response: ", err));

    if (request.url === "/") {
        if (request.method === "GET") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;

            let body = "";
            request
                .on("data", function (chunk) {
                    body += chunk;
                })
                .on("end", function () {
                    console.log(body); //logs the entire request body
                });
            response.end("<title>Hello World!</title> <p>Hello World!</p>");
        } else if (request.method === "HEAD") {
            response.setHeader("content-type", "text/html");
            response.statusCode = 200;

            let body = "";
            request
                .on("data", function (chunk) {
                    body += chunk;
                })
                .on("end", function () {
                    console.log(body); //logs the entire request body
                });

            response.end();
        } else if (request.method === "POST") {
            response.setHeader("location", "/");
            response.statusCode = 302;

            let body = "";
            request
                .on("data", function (chunk) {
                    body += chunk;
                })
                .on("end", function () {
                    console.log(body); //logs the entire request body
                });
            response.end();
        } else {
            response.statusCode = 405;
            response.end();
        }
        const data = `${request.method}, ${request.url}, ${new Date()}, ${
            request.headers["user-agent"]
        }\n`;
        fs.appendFile("requests.txt", data, function (err) {
            if (err) throw err;
            console.log("Saved!");
        });
    }
});

server.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);
