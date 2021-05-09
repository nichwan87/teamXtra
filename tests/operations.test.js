const Operations = require('../userLib/operations');
const newOperations = new Operations(1, "Jane Doe", "janedoe@gmail.com", "janedoe", "Operations");

test('returns GitHub ', () => {
  expect(newOperations.getGitHub()).toBe('janedoe');
});

test('returns Email ', () => {
  expect(newOperations.getEmail()).toBe('janedoe@gmail.com');
});

test('returns Role ', () => {
  expect(newOperations.getRole()).toBe('Operations');
});

test('returns name ', () => {
  expect(newOperations.getName()).toBe("Jane Doe");
});

test('returns id ', () => {
  expect(newOperations.getId()).toBe(1);
});
