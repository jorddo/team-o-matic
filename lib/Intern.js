const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name = '', email = '', college = '') {
    super(name, email);

    this.college = college;
  }
}

module.exports = Intern;
