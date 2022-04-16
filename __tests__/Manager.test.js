const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

jest.mock("../lib/Manager");

test("gets Manager info as an object", () => {
  const manager = new Manager("Jon");

  expect(manager.name).toBeTruthy();
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBeTruthy();
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
