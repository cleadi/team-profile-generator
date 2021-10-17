const Manager = require("../lib/Manager");

const managerTest = new Manager ("Test Manager", "test@email.com", 13, "Manager");

describe("Manager", () => {
  it("they have a name", () => {
    expect(managerTest.name).toEqual(expect.any(String))
    expect(managerTest.name.length).toBeGreaterThanOrEqual(2)
  });
  it("they have an email address", () => {
    expect(managerTest.email).toEqual(expect.stringContaining("@"))
  });
  it("they have an id that is a number", () => {
    expect(managerTest.id).toEqual(expect.any(Number))
  });
  it("they have the role of manager", () => {
    expect(managerTest.role).toBe("Manager")
  });
  it("they have an office number", () => {
    keys = Object.keys(managerTest)
    optionKey = keys[4]
    expect(optionKey).toBe("office")
    expect(managerTest.gitHub).toEqual(expect.any(String))
  });
});