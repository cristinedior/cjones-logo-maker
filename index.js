// index.js
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

// This function prompts the user for input.
function promptUser() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape',
      choices: ['Circle', 'Triangle', 'Square'] 
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
        when: (answers) => answers.hasText, 
        validate: (input) => {
          return input.length <= 3 || 'Text must be up to 3 characters long.';
        }
      }
  ]);
}
function generateSVG({ shape, color, text }) {
    // Start with the SVG opening tag
    let svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  
    // Instantiate the correct shape object
    const shapeObj = new {
      'Circle': Circle,
      'Triangle': Triangle,
      'Square': Square
    }[shape](color); 
  
    // Add the shape to the SVG content
    svgContent += shapeObj.render();
  
    // If text is included, add it to the SVG
    if (text) {
      svgContent += `<text x="150" y="100" fill="white" font-size="20" text-anchor="middle" dominant-baseline="middle">${text}</text>`;
    }

    svgContent += `</svg>`;
  
    return svgContent;
  }
  function saveSvgToFile(svgContent) {
    fs.writeFileSync('examples/logo.svg', svgContent);
    console.log('Generated logo.svg in the examples folder');
  }
  
  // Run the application
  function runApp() {
    promptUser().then((answers) => {
      const svg = generateSVG(answers);
      saveSvgToFile(svg);
    }).catch(error => {
      console.error('An error occurred:', error);
    });
  }
  
  runApp(); 

