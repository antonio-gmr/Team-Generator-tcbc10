const Employee = require("../lib/Employee");

test("Generate object for Employee", () => {
  const employee = new Employee("Antonio Garcia-Marquez", 01, "garciamarquez94@hotmail.com");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
//Check for Employee methods.

test("gets methods", () => {
  const employee = new Employee("Antonio Garcia-Marquez", 01, "garciamarquez94@hotmail.com");
  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getid()).toEqual(expect.any(Number));
  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
  expect(employee.getRole()).toEqual("Employee");
});