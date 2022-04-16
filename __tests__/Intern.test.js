const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

jest.mock("../lib/Intern");

test("gets Intern info as an object", () => {
  const intern = new Intern("Jon");

  expect(intern.name).toBeTruthy();
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBeTruthy();
  expect(intern.school).toBeTruthy();
});
