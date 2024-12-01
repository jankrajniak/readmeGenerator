
# README Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Descriptionn](#description)
- [Installation Instructions](#installation-instructions)
- [How to Use the App](#how-to-use-the-app)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instrustions](#test-instructions)
- [Questions](#questions)

## Description
- The goal of this project was to create a README generator, which builds a professional README based on user inputs
- The application is written in JavaScript and intended to be run via Node.Js
- The application has two modes of operation - Basic and Advanced
- Both modes of operation will prompt the user for inputs and automatically generate a README in the project directory


## Installation Instructions
- The application requires the colors and inquirer packages to be installed in the project directory
- The packages can be installed via the command "npm install colors inquirer"
- The application also uses native packages (fs) and custom packages (resources.js and data.js)
- The main function calls either basic() (imported from basic.js) or advanced() (imported from advanced.js) to operate either mode
- The imports are handled via modularization, so the package.json file needs to include "type":"module"


## How to Use the App
- Use Basic mode to create a simple README for simple code without much need for explanation
- Use Advanced mode to create a README for complex code, where more explanation is required
- Advanced mode allows user to enter multiple bullet points (for appropriate sections), to delete previous entries, or to directly replace those entries


## Contribution Guidelines
- Original author: Jan Krajniak
- Please feel free to re-use the code
- If re-using all or part of the code, please cite the original author


## Test Instructions
- N/A


## Questions
- My GitHub username: jankrajniak
- My email address: jan.krajniak@gmail.com
- Additional instructions on how to contact me:
  - If you wish to contact me, please message me at the above email address
  - I can also be found on LinkedIn if you wish to contact me outside of email

### Link to recording showing the application functionality:
(This was added after I used the application to generate this readme)
https://drive.google.com/file/d/1Fi77Fhz-Ua55RR4Tl2IB5wwbT1lWVlgr/view?usp=sharing
