const Casual = require('../userLib/casual');
const newCasual = new Casual(1, "Jane Doe", "janedoe@gmail.com", "janedoe", "Casual");

test('returns GitHub ', () => {
  expect(newCasual.getGitHub()).toBe('janedoe');
});

test('returns Email ', () => {
  expect(newCasual.getEmail()).toBe('janedoe@gmail.com');
});

test('returns Role ', () => {
  expect(newCasual.getRole()).toBe('Casual');
});

test('returns name ', () => {
  expect(newCasual.getName()).toBe("Jane Doe");
});

test('returns id ', () => {
  expect(newCasual.getId()).toBe(1);
});
