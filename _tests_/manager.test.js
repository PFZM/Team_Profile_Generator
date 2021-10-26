const Manager = require("../lib/Manager");

describe("Manager class", () => {
  describe("Create a Manager object", () => {
    it("should return the correct name, id, email and office number", () => {
      const manager = new Manager("Pablo", 23, "pfzm@xx.com", 3542);

      expect(manager.name).toEqual("Pablo");
      expect(manager.id).toEqual(23);
      expect(manager.email).toEqual("pfzm@xx.com");
      expect(manager.officeNumber).toEqual(3542);
    });

    it("should return correct office number (this.officeNumber) when getOfficeNumber() is called", () => {
      const manager = new Manager("Pablo", 23, "pfzm@xx.com", 3542);
      expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
    });

    it("should return 'Manager' when getRole() is called", () => {
      const manager = new Manager("Pablo", 23, "pfzm@xx.com", 3542);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
