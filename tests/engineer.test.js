const Engineer = require('../userLib/engineer');
const newEngineer = new Engineer(1, "Jane Doe", "janedoe@gmail.com", "janedoe", "Engineer");

test('returns GitHub ', () => {
  expect(newEngineer.getGitHub()).toBe('janedoe');
});

test('returns Email ', () => {
  expect(newEngineer.getEmail()).toBe('janedoe@gmail.com');
});

test('returns Role ', () => {
  expect(newEngineer.getRole()).toBe('Engineer');
});

test('returns name ', () => {
  expect(newEngineer.getName()).toBe("Jane Doe");
});

test('returns id ', () => {
  expect(newEngineer.getId()).toBe(1);
});
