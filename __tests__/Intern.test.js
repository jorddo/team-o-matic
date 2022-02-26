const Intern = require('../lib/Intern');

describe('Intern', () => {
  test('creates the intern object', () => {
    const intern = new Intern('Jordan', 'jordan@daddy.daddy', 'harvard');

    expect(intern.name).toBe('Jordan');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('jordan@daddy.daddy');
    expect(intern.college).toBe('harvard');
  });
});
