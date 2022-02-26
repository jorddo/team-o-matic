const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  test('creates engineer object', () => {
    const engineer = new Engineer('Alec', 'alec@fakemail.com', 'ibealec');

    // need name, employee id, email address, github username
    expect(engineer.name).toBe('Alec');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('alec@fakemail.com');
    expect(engineer.github).toBe('ibealec');
  });
});
