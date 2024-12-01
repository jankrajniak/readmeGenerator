export const licenses = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    BSD: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    None: 'No license',
};



export const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter the project title: ',
    },{
        type: 'input',
        name: 'description',
        message: 'Please enter the project description: ',
    },{
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions: ',
    },{
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
    },{
        type: 'list',
        name: 'license',
        message: 'Please select the license for the project: ',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },{
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username: ',
    },{
        type: 'input',
        name: 'email',
        message: 'Please enter your email address: ',
    },{
        type: 'input',
        name: 'contactHow',
        message: 'Please enter instructions on how to contact you: ',
    }
]

