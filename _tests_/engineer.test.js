const Engineer = require("../lib/Engineer")

const engineerTest = new Engineer ("Test Engineer", "test@email.com", 13, "Engineer");

describe("Engineer", () => {

  it("they have a name", () => {
    expect(engineerTest.name).toEqual(expect.any(String))
    expect(engineerTest.name.length).toBeGreaterThanOrEqual(2)
  });

  it("they have an email address", () => {
    expect(engineerTest.email).toEqual(expect.stringContaining("@"))
  });

  it("they have an id that is a number", () => {
    expect(engineerTest.id).toEqual(expect.any(Number))
  });

  it("they have the role of engineer", () => {
    expect(engineerTest.role).toBe("Engineer")
  });

  it("they have a github username", () => {
    keys = Object.keys(engineerTest)
    optionKey = keys[4]
    expect(optionKey).toBe("github")
    expect(engineerTest.github).toEqual(expect.any(String))
  });

});