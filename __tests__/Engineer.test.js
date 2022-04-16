const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

jest.mock("../lib/Engineer");

test("gets Engineer info as an object", () => {
  const engineer = new Engineer("Jon");

  expect(engineer.name).toBeTruthy();
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBeTruthy();
  expect(engineer.github).toBeTruthy();
});
