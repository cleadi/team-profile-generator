const Employee = require("../lib/Employee");

const employeeTest = new Employee ("Test Employee", "test@email.com", 12, "Employee");

describe("Employee", () => {

  it("they have a name", () => {
    expect(employeeTest.name).toEqual(expect.any(String))
    expect(employeeTest.name.length).toBeGreaterThanOrEqual(2)
  });

  it("they have an email address", () => {
    expect(employeeTest.email).toEqual(expect.stringContaining("@"))
  });

  it("they have an id that is a number", () => {
    expect(employeeTest.id).toEqual(expect.any(Number))
  });

  it("they have the role of employee", () => {
    expect(employeeTest.role).toBe("Employee")
  });

});