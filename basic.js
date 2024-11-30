//native packages
import fs from 'node:fs';

//third party packages
import inquirer from 'inquirer';

//custom packages
import * as myData from './data.js';

//Function logic
export default function basic() {

    // Gather inputs from user on the content of the README via inquirer
    inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please enter the project title: ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter the project description: ',
        }, {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation instructions: ',
        }, {
            type: 'input',
            name: 'usage',
            message: 'Please enter the usage information: ',
        },{
            type: 'input',
            name: 'contributors',
            message: 'Please provide details on the contribution guidelines: ',
        },{
            type: 'input',
            name: 'test',
            message: 'Please provide the test instructions: ',
        }, {
            type: 'list',
            name: 'license',
            message: 'Please select the license for the project: ',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        },{
            type: 'input',
            name: 'github',
            message: 'Please enter your Github username: ',
        }, {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address: ',
        }, {
            type: 'input',
            name: 'contactHow',
            message: 'Please enter instructions on how to contact you: ',
        }
    // Write the README file with the gathere inputs    
    ]).then(answers => {

        // First create the contents of the README file. The license information is added from the data.js file imported as the module myData
        const message = `
# ${answers.projectTitle}
${myData.licenses[answers.license]}

## Table of Contents
- [Descriptionn](#description)
- [Installation Instructions](#installation-instructions)
- [How to Use the App](#how-to-use-the-app)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instrustions](#test-instructions)
- [Questions](#questions)

## Description
${answers.description}

## Installation Instructions
${answers.installation}

## How to Use the App
${answers.usage}

## Contribution Guidelines
${answers.contributors}

## Test Instructions
${answers.test}

## Questions
- My GitHub username: ${answers.github}
- My email address: ${answers.email}
- Additional instructions on how to contact me:\n${answers.contactHow}`;
    
    // Then write the contents to the file using the fs package
    fs.writeFile('README.md', message, (err) => {
    console.error(err);
    });
})
}

