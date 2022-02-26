const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name = '', email = '') {
    super(name, email);

    this.office = this.generateRandomNumber(10);
  }

  generateRandomNumber(max = 10) {
    return Math.floor(Math.random() * max);
  }
}

module.exports = Manager;
