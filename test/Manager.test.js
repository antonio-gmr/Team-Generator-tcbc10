const Manager = require("../lib/Manager");

test("generate manager object and gets role of employee", () => {
  const manager = new Manager(
    "Antonio Garcia-Marquez",
    01,
    "garciamarquez94@hotmail.com",
   5432
  );
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.getRole()).toEqual("Manager");
});