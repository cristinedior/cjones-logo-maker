// index.js
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib_examples/shapes');
const fs = require('fs');

// This function is okay; it prompts the user for input.
function promptUser() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape',
      choices: ['Circle', 'Triangle', 'Square'] // Match the class names for easy instantiation
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color of the shape (color keyword or hex code):'
    },
    {
        type: 'confirm',
        name: 'hasText',
        message: 'Do you want to add text?'
      },
      {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (up to 3 characters):',
        when: (answers) => answers.hasText, // This now correctly refers to the outcome of the above confirm question.
        validate: (input) => {
          return input.length <= 3 || 'Text must be up to 3 characters long.';
        }
      }
  ]);
}

// This function is okay; it creates an instance of the selected shape and sets the color.
// It also writes the SVG to a file.

runApp(); // Call runApp instead of promptUser to start the application
