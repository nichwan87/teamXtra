const Intern = require('../userLib/intern');
const newIntern = new Intern(1, "Jane Doe", "janedoe@gmail.com", "janedoe", "Intern");

test('returns GitHub ', () => {
  expect(newIntern.getGitHub()).toBe('janedoe');
});

test('returns Email ', () => {
  expect(newIntern.getEmail()).toBe('janedoe@gmail.com');
});

test('returns Role ', () => {
  expect(newIntern.getRole()).toBe('Intern');
});

test('returns name ', () => {
  expect(newIntern.getName()).toBe("Jane Doe");
});

test('returns id ', () => {
  expect(newIntern.getId()).toBe(1);
});
