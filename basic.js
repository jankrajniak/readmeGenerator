//native packages
import fs from 'node:fs';

//third party packages
import inquirer from 'inquirer';

//custom packages
import * as myData from './data.js';

//Function logic
export default function basic() {

    // Gather inputs from user on the content of the README via inquirer
    inquirer.prompt(myData.questions).then(answers => {
    // Write the README file with the gathere inputs
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
        if (!err) {
            console.log('\nYour README file has been successfully created\n'.green);
        } else {
            console.error(err);
    }});
})
}

