// TODO: Include packages needed for this application
//libraries needed for assignment
const inquirer = require("inquirer")
const fs = require("fs")
const { message } = require('statuses')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project title",
        validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
        
    },
    {
        type: "input",
        name: "description",
        message: "Enter your project description"
    },
    {
        type: "input",
        name: "instructions",
        message: "Enter your project installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter your project usage"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter your project contribution guidelines"
    },
    {
        type: "input",
        name: "test",
        message: "Enter your project's test instructions"
    },
    {
        type: "list",
        name: "license",
        message: "Select your license",
        choices: [
            "Apache", "GNU GPLv3", "MIT", "ISC", "None"

        ]
    },
    {
        type: "input",
        name: "username",
        message: "Enter your github user name"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markdown = generateMarkdown(answers)
            writeToFile("example-readme.md", markdown)
        })
}

// Function call to initialize app
init();
