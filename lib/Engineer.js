const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return inquirer
      .prompt({
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",
      })
      .then((val) => {
        this.github = val.GitHub;
      });
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
