var inquirer = require('inquirer');
var readMeGenerator = require("./ReadMeGenerator");
var fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is name of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide a description of your project?",
        name: "description",
    },
    {
        type: "list",
        message: "What license you choose for your application?",
        name: "license",
        choices: [
            "GVL-GP",
            "MIT",
            ""
        ]
    },
    {
        type: "input",
        message: "What installation your command run?",
        name: "installation",
        default: 'npm i'
    },
    {
        type: "input",
        message: "What test you run on Node.js?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the name of your Github?",
        name: "github",
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
