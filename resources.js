//native packages

//third party packages
import inquirer from "inquirer";
import colors from 'colors';


//custom packages

//Starting array to collect data for the README file. The array is structured as an object with each key representing a question and the value being an object with the following properties:
//answers: an array to store the responses to the question
//answered: a boolean to indicate if the question has been answered (this value will be manpulated as the function using the array progresses)
//multiple: a boolean to indicate if the question allows for multiple answers
export let readmeArray = {
    projectTitle: {
        answers: [],
        answered: false,
        multiple: false
    }, description: {
        answers: [],
        answered: false,
        multiple: true
    }, installation: {
        answers: [],
        answered: false,
        multiple: true
    }, usage: {
        answers: [],
        answered: false,
        multiple: true
    }, contributors: {
        answers: [],
        answered: false,
        multiple: true
    }, test: {
        answers: [],
        answered: false,
        multiple: true
    }, license: {
        answers: [],
        answered: false,
        multiple: false
    }, github: {
        answers: [],
        answered: false,
        multiple: false
    }, email: {
        answers: [],
        answered: false,
        multiple: false
    }, contactHow: {
        answers: [],
        answered: false,
        multiple: true
    }
};

//Helper function used to collect the response for a list question. The function returns the response directly
export async function collectList(question) {
    let response = await inquirer.prompt([
        {
            type: question.type,
            name: question.name,
            message: question.message,
            choices: question.choices
        }
    ])

    return response[question.name];
}

//Helper function used to collect the response for a input question. The function returns the response directly. Returns null if the response from the user is
//empty
export async function collectInput(question) {
    let response = await inquirer.prompt([
        {
            type: question.type,
            name: question.name,
            message: question.message
        }
    ])

    if (response[question.name].length > 0) {
        return response[question.name];
    } else {
        return null;
    }
} 

//Helper function used to display the current content of the response to the question. Used to display the content after each operation on it (add, delete, finish)
export function displayContent(array) {
    let messageData = '';
    array.forEach((answer) => {
        messageData += `- ${answer}\n`;
    })
    console.log(`\nThe current content of your response is:\n${messageData}\n`);
}

// Helper function used to show the user a list of questions they will be answering and color those questions, which have been answered already, green
export function displayProgress (readmeData, questions) {
    let tracker = questions.reduce((message,question) => {
        return message + (readmeData[question.name].answered ? `${colors.green(question.name)}\n` : `${colors.grey(question.name)}\n`)
    },`\n${colors.blue('You will be answering the following questions')}\n-------------------------------------\n`);    
    console.log(tracker + '-------------------------------------');
}


// Helper function used to combine all answers provided to questions where multiple answers are allowed into a single string, than is compatible with markdown formatting for lists.
export function reducedAnswers(answers, tab = '- ') {
    return answers.reduce((final, answer) => {
        return final + (tab+`${answer}\n`)
    },'')
}