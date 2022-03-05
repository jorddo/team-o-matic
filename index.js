const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./helpers/generatePage');
const {
  type,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require('./helpers/questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// writing the HTML page
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;

    console.log('Page Complete. Check out the HTML to see the output!');
  });
};

const promptEmployee = (data) => {
  return inquirer.prompt(type).then(async ({ employeeType }) => {
    let additionalData;

    if (employeeType === 'Manager') {
      additionalData = await inquirer
        .prompt(managerQuestions)
        .then(({ name, email }) => {
          return new Manager(name, email);
        });
    } else if (employeeType === 'Engineer') {
      additionalData = await inquirer
        .prompt(engineerQuestions)
        .then(({ name, email, github }) => {
          return new Engineer(name, email, github);
        });
    } else {
      additionalData = await inquirer
        .prompt(internQuestions)
        .then(({ name, email, college }) => {
          return new Intern(name, email, college);
        });
    }

    const confirmAdd = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false,
      },
    ]);

    data.employees.push({ employeeType, ...additionalData });

    if (confirmAdd.confirmAddEmployee) {
      return promptEmployee(data);
    } else {
      return data;
    }
  });
};

const initial = { employees: [] };
promptEmployee(initial)
  .then((data) => {
    return generateHTML(data);
  })
  .then((page) => {
    return writeToFile('./dist/index.html', page);
  });
