const chalk = require("chalk");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    q: "Welcome to T-Land, where the bass is strong in us and the nights are long, do you like to discover ?",
    answers: {
        yes: {
            q: "You are walking down a long dark street, the wind is blowing and hitting you hard. Suddenly a group is turning into your street, all in black wearing big boots and long clothes",
            answer: {
                yes: {
                    q: "There are stoping infront of a builduing that looks like a square, you wanna get it in",
                },
                no: "Okay than go Home",
            },
        },
        no: "Okay than go Home",
    },
    no: "okay than go Home",
};

let currentQuestion = story.q;
let currentAnswer = story.answers;

function askQuestion(question, answers) {
    rl.question(question, (input) => {
        if (!answers[input]) {
            rl.write("Thats not a answers");
            askQuestion(currentQuestion, currentAnswer);
        } else if (answers[input]) {
            currentQuestion = answers[input].q;
            currentAnswer = answers[input].answer;
            askQuestion(currentQuestion, currentAnswer);
        }
    });
}

askQuestion(currentQuestion, currentAnswer);
