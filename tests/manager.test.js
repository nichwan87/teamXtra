const Manager = require('../userLib/manager');
const newManager = new Manager(1, "Jane Doe", "janedoe@gmail.com", "janedoe", "Manager");

test('returns GitHub ', () => {
  expect(newManager.getGitHub()).toBe('janedoe');
});

test('returns Email ', () => {
  expect(newManager.getEmail()).toBe('janedoe@gmail.com');
});

test('returns Role ', () => {
  expect(newManager.getRole()).toBe('Manager');
});

test('returns name ', () => {
  expect(newManager.getName()).toBe("Jane Doe");
});

test('returns id ', () => {
  expect(newManager.getId()).toBe(1);
});
