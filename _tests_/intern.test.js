const Intern = require("../lib/Intern");

const internTest = new Intern ("Test Intern", "test@email.com", 13, "Intern");

describe("Intern", () => {

  it("they have a name", () => {
    expect(internTest.name).toEqual(expect.any(String))
    expect(internTest.name.length).toBeGreaterThanOrEqual(2)
  });

  it("they have an email address", () => {
    expect(internTest.email).toEqual(expect.stringContaining("@"))
  });

  it("they have an id that is a number", () => {
    expect(internTest.id).toEqual(expect.any(Number))
  });

  it("they have the role of intern", () => {
    expect(internTest.role).toBe("Intern")
  });

  it("they have a school name", () => {
    keys = Object.keys(internTest)
    optionKey = keys[4]
    expect(optionKey).toBe("school")
    expect(internTest.gitHub).toEqual(expect.any(String))
  });

});