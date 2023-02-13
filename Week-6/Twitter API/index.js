const express = require("express");
const https = require("https");
const app = express();
require("dotenv").config();

app.use(express.static(__dirname));

const { TWITTER_API_KEY, TWITTER_API_SECRET } = process.env;

const combinedString = `${TWITTER_API_KEY}:${TWITTER_API_SECRET}`;
console.log(combinedString);

// TASK: use base64 encoding combinedString:
const encodedString = Buffer.from(combinedString).toString("base64"); // use Buffer.from().toString();

function getToken(callback) {
    const req = https.request({
        method: "POST",
        host: "api.twitter.com",
        path: "/oauth2/token",
        headers: {
            Authorization: `Basic ${encodedString}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8.",
        },
    });

    req.on("response", (res) => {
        // res is response from twitter API
        let data = "";
        res.on("data", (chunk) => {
            data += chunk;
        });
        res.on("end", () => {
            //console.log("Response for getting Token: ", data);
            const dataJson = JSON.parse(data);
            callback(null, dataJson.access_token);
        });
        res.on("error", (err) => {
            callback(err, null);
        });
    });

    // Set body and end request
    req.end("grant_type=client_credentials");
}

// TASK: implement logic for actual GET-Request for getting Tweets. See getToken() function for analogy
function getTweets(token, callback) {
    const req = https.request({
        method: "GET",
        host: "api.twitter.com",
        path: `/1.1/statuses/user_timeline.json?count=100&screen_name=spdbt&tweet_mode=extended`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    req.on("response", (res) => {
        // res is response from twitter API
        let data = "";
        res.on("data", (chunk) => {
            data += chunk;
        });
        res.on("end", () => {
            console.log("Response for getting Token: ", data);
            const dataJson = JSON.parse(data);
            //console.log(dataJson);
            callback(null, dataJson);
        });
        res.on("error", (err) => {
            callback(err, null);
        });
    });

    // Set body and end request
    req.end("grant_type=client_credentials");
}

// 1. get a Bearer Token by making a POST request with encoded Key and Secret
// 2. get the Tweets by making a GET request with Bearer Token
// 3. filter & format/simplify tweets
// 4. respond to the client with the filtered/formatted tweets
app.get("/links.json", (req, res) => {
    getToken((error, token) => {
        console.log("token in getToken: ", token);
        if (error) {
            res.sendStatus(500);
        }
        getTweets(token, (error, tweets) => {
            if (error) {
                res.sendStatus(500);
            }
            const filteredTweets = filterTweets(tweets);
            console.log("filteredTweets: ", filteredTweets);

            res.json(filteredTweets);
        });
    });
});

// TASK: implement filterTweets function
//  - use the array method filter and map
//  - tipp: log the tweets and see how to access different information that we are interested in
//          example: tweets.entities.urls[0].url
//  - tipp: first filter and then change the structure with map
//      - we want to have something like { "text": "asdfasd", "url": "https://wp.com"}

function filterTweets(tweets) {
    const filteredTweets = tweets.filter((tweet) => {
        return tweet.entities.urls.length === 1;
    });

    const newTweets = filteredTweets.map((tweet) => {
        // TASK for later: move urls from text
        return { text: tweet.full_text, url: tweet.entities.urls[0].url };
    });
    console.log(newTweets);
    return newTweets;
}

// const filteredTweets = tweets.filter(tweet => {
//     return true; // TASK: replace true with the correct boolean expression: check if we have just one url
// }

// const newTweets = filteredTweets.map(tweet => {
//    // TASK for later: move urls from text
//      return { text: tweet.??? , url: tweet.??? }
// });
//return newTweets;

app.listen(8080, () => {
    console.log("Server running on localhost:8080");
});
