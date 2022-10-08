// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'How do others contribute to your project?',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does this project have?',
        choices: [
            {
                name: "Apache 2.0 License",
                value: "apache-2.0",
            },
            {
                name: "BSD 3-Clause License",
                value: "bsd-3-clause",
            },
            {
                name: "Eclipse Public License 1.0",
                value: "epl-1.0",
            },
            {
                name: "GNU GPL v3",
                value: "gpl-3.0",
            },
            {
                name: "The MIT License",
                value: "mit",
            },
            {
                name: "Mozilla Public License 2.0",
                value: "mpl-2.0",
            },
            {
                name: "The Do What the Fuck You Want to Public License",
                value: "wtfpl",
            },
            {
                name: "No License",
                value: "none",
            }
        ]
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
])
    .then((answers) => {
        console.log(answers)
        writeToFile(`${answers.title}-readme.md`, generateMarkdown(answers));
    });





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log(`Successfully created ${fileName}!`)

    );
}





// when using template literals use ticks, not quotes or singe quotes
// let name = "abc";
// "hi my name is " + name + "!"
// 'hi my name is ' + name + '!'
//     `hi my name is ${name}`




