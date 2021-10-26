const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("Create an Intern object", () => {
    it("should return the correct name, id, email and school", () => {
      const intern = new Intern("Pablo", 23, "pfzm@xx.com", "Monash");

      expect(intern.name).toEqual("Pablo");
      expect(intern.id).toEqual(23);
      expect(intern.email).toEqual("pfzm@xx.com");
      expect(intern.school).toEqual("Monash");
    });

    it("should return correct school (this.school) when getSchool() is called", () => {
      const intern = new Intern("Pablo", 23, "pfzm@xx.com", "Monash");
      expect(intern.getSchool()).toEqual(intern.school);
    });

    it("should return 'Intern' when getRole() is called", () => {
      const intern = new Intern("Pablo", 23, "pfzm@xx.com", "Monash");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
