const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./helpers/generatePage');
const questions = require('./helpers/questions');

// writing the HTML page
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;

    console.log('Page Complete. Check out the HTML to see the output!');
  });
};

const generateEmployee = () => {
  // return if else statements
  // const { employeeType } = await inquirer.prompt(type);
  return { id: 1, name: '' };
};

// TODO: need function for initialization
const init = async () => {
  const { employeeType } = await inquirer.prompt(questions.type);
  let additionalData;

  if (employeeType === 'Manager') {
    additionalData = await inquirer.prompt(questions.managerQuestions);
  } else if (employeeType === 'Engineer') {
    additionalData = await inquirer.prompt(questions.engineerQuestions);
  } else {
    additionalData = await inquirer.prompt(questions.internQuestions);
  }
  console.log({ additionalData });
  const data = { employeeType, ...additionalData };
  console.log({ data });
  // writeToFile('./dist/index.html', generateHTML(data));

  // need assignment of office number function here?
};

init();
