const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return inquirer
      .prompt({
        type: "input",
        name: "school",
        message: "What is your school's name?",
      })
      .then((val) => {
        this.school = val.school;
      });
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
