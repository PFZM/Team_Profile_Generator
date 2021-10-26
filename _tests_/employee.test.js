const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("Create an Employee object", () => {
    it("should return the correct name, id, email", () => {
      const employee = new Employee("Pablo", 23, "pfzm@xx.com");

      expect(employee.name).toEqual("Pablo");
      expect(employee.id).toEqual(23);
      expect(employee.email).toEqual("pfzm@xx.com");
    });

    it("should return correct name (this.name) when getName() is called", () => {
      const employee = new Employee("Pablo", 23, "pfzm@xx.com");
      expect(employee.getName()).toEqual(employee.name);
    });

    it("should return correct Id (this.id) when getId() is called", () => {
      const employee = new Employee("Pablo", 23, "pfzm@xx.com");
      expect(employee.getId()).toEqual(employee.id);
    });

    it("should return correct Email (this.email) when getEmail() is called", () => {
      const employee = new Employee("Pablo", 23, "pfzm@xx.com");
      expect(employee.getEmail()).toEqual(employee.email);
    });

    it("should return 'Employee' when getRole() is called", () => {
      const employee = new Employee("Pablo", 23, "pfzm@xx.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
