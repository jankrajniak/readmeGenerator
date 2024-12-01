//native packages
import fs from 'node:fs';

//third party packages
import inquirer from 'inquirer';
import colors from 'colors';

//import custom packages
import * as myData from './data.js';
import * as resources from './resources.js';


//FUNCTION LOGIC

// FUNCTION USED TO COLLECT INPUTS FROM THE USER

async function collectData(readmeData, questions) {

    for (const question of questions) {

        //Display the progress indicator to the user
        resources.displayProgress(readmeData, questions);
        
        while (!readmeData[question.name].answered) {
            //Display the current content of the response to the question
            console.log(`\nYour are currently answering for the ${colors.blue(question.name)} question`);
            resources.displayContent(readmeData[question.name].answers);
            
            //Display the options for the user to proceed with the application
            let choice = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'Please select from the following options:',
                    choices: ['Add content', 'Delete the previous response', 'Finish answering the question']
                }
            ])

            //Logic for when the user selects to add content
            if (choice.choice === "Add content") {
                //Check if this particular question allows for just a single answer and is of type list
                if (readmeData[question.name].multiple === false && question.type === 'list') {
                    // If the question already has an answer(the array under answers for the corresponding object in readmeData is not empty),
                    // inform the user the current response will replace the existing entry. Proceed will collecting input and storing the input
                    // by replacing the first entry in the answers array
                    if (readmeData[question.name].answers.length > 0) {
                        console.log('\nThis question allows only one entry. This response will replace the existing content\n'.red);

                        let response = await resources.collectList(question);

                        readmeData[question.name].answers[0] = response;
                    
                    // If the quest doesn't have a stored answer yet(the answers array for the corresponding object in readmeData is empty),
                    // proceed with collecting the input and storing the input by appending it to the answers array
                    } else {
                        let response = await resources.collectList(question);

                        readmeData[question.name].answers.push(response);
                    }
                // Check if this particular question allows for just a single answer and is of the type input.
                } else if (readmeData[question.name].multiple === false && question.type === 'input') {

                    if (readmeData[question.name].answers.length > 0) {
                        console.log(`\nThis question allows only one entry. This response will replace the existing content\n`.red);

                        let response = await resources.collectInput(question);
                        
                        //If the user provides an actual value, it it stored appropraitely. If not, the user is to informed to provide a valid response and must repeat their actions.
                        response ? readmeData[question.name].answers[0] = response : console.log('\nPlease provide a valid response (at least an N/A must be provided)\n'.red);

                    } else {
                        
                        let response = await resources.collectInput(question);

                        response ? readmeData[question.name].answers.push(response) : console.log('\nPlease provide a valid response (at least an N/A must be provided)\n'.red)
                    }
                } else {
                    let response = await resources.collectInput(question);

                    response ? readmeData[question.name].answers.push(response) : console.log('\nPlease provide a valid response (at least an N/A must be provided)\n'.red)
                }
            
            //Logic for when the user selects to delete the previous response: If there are responses to delete, the last response is removed from the answers array.
            // Otherwise, the user is informed that there are no responses to delete
            } else if (choice.choice === "Delete the previous response") {

                if (readmeData[question.name].answers.length > 0) {
                    readmeData[question.name].answers.pop();
                } else {
                    console.log('\nThere are no responses to delete\n'.red);
                }

            // Logic for when the user selects  to finish answering the question: If there are responses recorded, the question is marked as answered. If not, the user
            // is asked to provide at least one valid response
            } else if (choice.choice === "Finish answering the question") {
                
                if (readmeData[question.name].answers.length > 0) {
                    readmeData[question.name].answered = true;
                    resources.displayContent(readmeData[question.name].answers);
                } else {
                    console.log('\nPlease provide at least one response (at least an N/A must be provided)\n'.red);
                }
            }
        } 
    }
    //Display the final progress indicator to the user and return the array for further processing
    resources.displayProgress(readmeData, questions);
    return readmeData;
}

// FUNCTION USED TO GENERATE MESSAGE CONTENT FOR THE README FILE

function buildReadme(userData, licenses) {

    // Create the content of the README file to be written to the file system
       
    const message = `
# ${userData.projectTitle.answers[0]}
${licenses[userData.license.answers[0]]}

## Table of Contents
- [Descriptionn](#description)
- [Installation Instructions](#installation-instructions)
- [How to Use the App](#how-to-use-the-app)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instrustions](#test-instructions)
- [Questions](#questions)

## Description
${resources.reducedAnswers(userData.description.answers)}

## Installation Instructions
${resources.reducedAnswers(userData.installation.answers)}

## How to Use the App
${resources.reducedAnswers(userData.usage.answers)}

## Contribution Guidelines
${resources.reducedAnswers(userData.contributors.answers)}

## Test Instructions
${resources.reducedAnswers(userData.test.answers)}

## Questions
- My GitHub username: ${userData.github.answers[0]}
- My email address: ${userData.email.answers[0]}
- Additional instructions on how to contact me:\n${resources.reducedAnswers(userData.contactHow.answers, '  - ')}

## License
- This project is licensed under the ${userData.license.answers[0]} license: ${licenses[userData.license.answers[0]]}`;
        
    // Then write the contents to the file using the fs package
    fs.writeFile('README.md', message, (err) => {
    if (!err) {
        console.log('\nYour README file has been successfully created\n'.green);
    } else {
        console.error(err);
    }});
}    

// OVERALL ADVANCED FUNCTION
export default async function advanced() {

    // License information is added from the data.js file imported as the module myData
    const licenses = myData.licenses;
    const questions = myData.questions;

    // Initiate database to store responses from the user and whether the question has been answered
    let readmeData = resources.readmeArray;

    // Collect user inputs using the collectData function
    const userData = await  collectData(readmeData, questions);

    // Build the README file and write it to the file system and inform the user of the success (or display error)
    buildReadme(userData, licenses);

}