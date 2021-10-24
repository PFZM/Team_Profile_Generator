const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return inquirer
      .prompt({
        type: "input",
        name: "office",
        message: "What is your manager's office number?",
        validate: (val) => {
          if (isNaN(val)) {
            return "Please enter a number";
          }
          return true;
        },
      })
      .then((val) => {
        this.officeNumber = val.office;
      });
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
