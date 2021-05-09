const Executive = require('../userLib/executive');
const newExecutive = new Executive(1, "Jane Doe", "janedoe@gmail.com", "janedoe", "Executive");

test('returns GitHub ', () => {
  expect(newExecutive.getGitHub()).toBe('janedoe');
});

test('returns Email ', () => {
  expect(newExecutive.getEmail()).toBe('janedoe@gmail.com');
});

test('returns Role ', () => {
  expect(newExecutive.getRole()).toBe('Executive');
});

test('returns name ', () => {
  expect(newExecutive.getName()).toBe("Jane Doe");
});

test('returns id ', () => {
  expect(newExecutive.getId()).toBe(1);
});
