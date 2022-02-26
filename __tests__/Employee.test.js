const Employee = require('../lib/Employee');

describe('Employee', () => {
  test('creates employee object', () => {
    const employee = new Employee('Jordan', 'jordanbsneed@gmail.com');

    expect(employee.name).toBe('Jordan');
    expect(employee.email).toBe('jordanbsneed@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
  });
});

// name, employee ID, email address, office number
