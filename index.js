const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generatePage');

// writing the HTML page
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;

    console.log('Page Complete. Check out the HTML to see the output!');
  });
};

// TODO: need function for initialization
const init = () => {
  return inquirer
    .prompt(type)
    .then((data) => {
      if (data.employeeType === 'Manager') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: `What is the employee's name?`,
          },
          {
            type: 'input',
            name: 'email',
            message: `What is the employee's email address?`,
          },
        ]);
        // need assignment of office number function here?
      } else if (data.employeeType === 'Engineer') {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: `What is the employee's name?`,
          },
          {
            type: 'input',
            name: 'email',
            message: `What is the employee's email address?`,
          },
          {
            type: 'input',
            name: 'github',
            message: `What is the employee's GitHub username?`,
          },
        ]);
      } else {
        inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: `What is the employee's name?`,
          },
          {
            type: 'input',
            name: 'email',
            message: `What is the employee's email address?`,
          },
          {
            type: 'input',
            name: 'college',
            message: `Where did the employee attend college?`,
          },
        ]);
      }
    })
    .then((pageData) => {
      writeToFile('./dist/index.html', generateHTML(pageData));
    });
};

// TODO: inquirer questions
const type = [
  {
    type: 'list',
    name: 'employeeType',
    message: 'Please make an employee type selection:',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
];

init();
console.log(type);
