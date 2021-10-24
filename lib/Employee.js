const inquirer = require("inquirer");

class Employee {
  name = "";
  id = "";
  email = "";
  constructor(name, id, email) {
    this.name = name || "";
    this.id = id || "";
    this.email = email || "";
  }
  getName() {
    const role = this.getRole();
    return inquirer
      .prompt({
        type: "input",
        name: "name",
        message: `What is your ${role}'s name?`,
      })
      .then((val) => {
        this.name = val.name;
      });

    // return this.name;
  }

  getId() {
    const role = this.getRole();
    return inquirer
      .prompt({
        type: "input",
        name: "ID",
        message: `What is your ${role}'s id?`,
      })
      .then((val) => {
        this.id = val.ID;
      });
    // return this.id;
  }

  getEmail() {
    const role = this.getRole();
    return inquirer
      .prompt({
        type: "input",
        name: "email",
        message: `What is your ${role}'s email?`,
      })
      .then((val) => {
        this.email = val.email;
      });
    // return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
