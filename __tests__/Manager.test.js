const Manager = require('../lib/Manager');

describe('Manager', () => {
  test('creates a manager object', () => {
    const manager = new Manager('Jared', 'jared@fakemail.com');

    // need name, employee id, email address, office number
    expect(manager.name).toBe('Jared');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('jared@fakemail.com');
    expect(manager.office).toEqual(expect.any(Number));
  });
});
