var inquirer = require('inquirer');
var fs = require("fs");
var readMeGenerator = require("./utils/readMeGeneratore")

let questions = [
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
            "GVL-GPL",
            "MIT",
            "APACHE 2.0",
            "BSD 3",
            "None of the above",
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
        default: 'npm test',
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
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data);
}

// TODO: Crexsate a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response) {
        var content = readMeGenerator(response);
        fs.writeToFile("./README.md", content, function(error) {
            if (error) throw error 
        });
});

// Function call to initialize app
init();
