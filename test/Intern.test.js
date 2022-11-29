
const Intern = require("../lib/Intern");

test("Generate object for Intern", () => {
  const intern = new Intern(
    "Antonio Garcia-Marquez",
    01,
    "garciamarquez94@hotmail.com",
    "Universidad Iberoamericana"
  );
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.getRole()).toEqual("Intern");
});