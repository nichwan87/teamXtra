const Officer = require('../userLib/officer');
const newOfficer = new Officer(1, "Jane Doe", "janedoe@gmail.com", "janedoe", "Officer");

test('returns GitHub ', () => {
  expect(newOfficer.getGitHub()).toBe('janedoe');
});

test('returns Email ', () => {
  expect(newOfficer.getEmail()).toBe('janedoe@gmail.com');
});

test('returns Role ', () => {
  expect(newOfficer.getRole()).toBe('Officer');
});

test('returns name ', () => {
  expect(newOfficer.getName()).toBe("Jane Doe");
});

test('returns id ', () => {
  expect(newOfficer.getId()).toBe(1);
});
