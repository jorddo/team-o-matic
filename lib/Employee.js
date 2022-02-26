// name, employee id, email
class Employee {
  constructor(name = '', email = '') {
    this.name = name;
    this.id = this.generateRandomNumber(1000);
    this.email = email;
  }

  generateRandomNumber(max = 5000) {
    return Math.floor(Math.random() * max);
  }
}

module.exports = Employee;
