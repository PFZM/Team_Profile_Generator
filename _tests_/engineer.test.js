const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("Create an Engineer object", () => {
    it("should return the correct name, id, email and github", () => {
      const engineer = new Engineer("Pablo", 23, "pfzm@xx.com", "PFZM");

      expect(engineer.name).toEqual("Pablo");
      expect(engineer.id).toEqual(23);
      expect(engineer.email).toEqual("pfzm@xx.com");
      expect(engineer.github).toEqual("PFZM");
    });

    it("should return correct github (this.github) when getGithub() is called", () => {
      const engineer = new Engineer("Pablo", 23, "pfzm@xx.com", "PFZM");
      expect(engineer.getGithub()).toEqual(engineer.github);
    });

    it("should return 'Engineer' when getRole() is called", () => {
      const engineer = new Engineer("Pablo", 23, "pfzm@xx.com", "PFZM");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
