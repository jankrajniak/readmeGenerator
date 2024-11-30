//native packages

//third party packages
import inquirer from 'inquirer';

//custom private packages
import basic from './basic.js';
import advanced from './advanced.js';


//Function logic

async function main() {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Please select the application mode from the list below: ',
            choices: [
                "\x1b[1mBasic:\x1b[0m Use this mode if your code is simple and doesn't require extensive documentation",
                "\x1b[1mAdvanced:\x1b[0m Use this mode if your code is complex and requires extensive documentation"
            ]
        }
    ])

    choice === "\x1b[1mBasic:\x1b[0m Use this mode if your code is simple and doesn't require extensive documentation" ? basic() : advanced();
}

main();