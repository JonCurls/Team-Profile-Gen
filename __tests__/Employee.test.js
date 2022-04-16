const Employee = require("../lib/Employee");

jest.mock("../lib/Employee");

test("gets employees info as an object", () => {
  const employee = new Employee("Jon");

  expect(employee.name).toBeTruthy();
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBeTruthy();
});
