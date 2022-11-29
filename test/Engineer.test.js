const Engineer = require("../lib/Engineer");

test("Creates new Engineer Object", () => {
  const employee = new Engineer(
    "Antonio Garcia-Marquez",
    01,
    "antonio-gmr"
  );

  expect(employee.name).toBe("Antonio Garcia-Marquez");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.github).toEqual(expect.any(String));
});

test("Checks all methods for Engineer class", () => {
  const employee = new Engineer(
    "Antonio Garcia-Marquez",
    80,
    "antonio-gmr"
  );

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getid()).toBe(employee.id);
  expect(employee.getGithub()).toBe(employee.github_username);
  expect(employee.getRole()).toBe("Engineer");
});