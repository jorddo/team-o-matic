const type = [
  {
    type: 'list',
    name: 'employeeType',
    message: 'Please make an employee type selection:',
    choices: ['Manager', 'Engineer', 'Intern'],
  },
];

const managerQuestions = [
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
];

const engineerQuestions = [
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
];

const internQuestions = [
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
];

module.exports = { type, managerQuestions, engineerQuestions, internQuestions };
