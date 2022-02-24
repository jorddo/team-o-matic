const fs = require('fs');
const inquirer = require('inquirer');

// writing the HTML page
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;

    console.log('Page Complete. Check out the HTML to see the output!');
  });
};

// TODO: need function for initialization

// TODO: inquirer questions
const questions = [];
