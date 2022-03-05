const generateEmployee = async () => {
  const { employeeType } = await inquirer.prompt(type);
  let additionalData;

  if (employeeType === 'Manager') {
    additionalData = await inquirer.prompt(managerQuestions);
  } else if (employeeType === 'Engineer') {
    additionalData = await inquirer.prompt(engineerQuestions);
  } else {
    additionalData = await inquirer.prompt(internQuestions);
  }
};

const addAdditionalEmployee = async () => {
  return await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to enter another employee?',
      default: false,
    },
  ]);
};

// TODO: need function for initialization
const init = async () => {
  const arr = [];
  const firstEmployee = await generateEmployee();
  arr.push(firstEmployee);

  const additionalEmployee = await addAdditionalEmployee();

  if (addAdditionalEmployee.confirmAddEmployee) {
    const addEmployee = await generateEmployee();
    arr.push(addEmployee);
  }

  console.log({ additionalData });
  const data = { employeeType, ...additionalData };
  console.log({ data });
  // writeToFile('./dist/index.html', generateHTML(data));
};

init();

// init()
// .then()

// 1. Init the app
// 2. Ask for first employee info
//    - Push to employees array
// 3. Ask if additional employee
//    - If so, generate new employee and push to employees array
//    - If not, generate HTML
