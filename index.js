const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const fs = require("fs");

const teamMembers = [];

const init = () => {
  console.log("Please build your team");
  const manager = new Manager();
  manager
    .getName()
    .then(() => manager.getId())
    .then(() => manager.getEmail())
    .then(() => manager.getOfficeNumber())
    .then(() => chooseOption())
    .then(() => {
      console.log(manager);
      console.log(teamMembers);
    })
    .catch((err) => console.error(err));
};

const chooseOption = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "options",
      message: "Which type if team member would you like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members",
      ],
    })
    .then((choice) => {
      if (choice.options === "Engineer") {
        const engineer = new Engineer();
        return engineer
          .getName()
          .then(() => engineer.getId())
          .then(() => engineer.getEmail())
          .then(() => engineer.getGithub())
          .then(() => {
            teamMembers.push(engineer);
            return chooseOption();
          });
      }

      if (choice.options === "Intern") {
        const intern = new Intern();
        return intern
          .getName()
          .then(() => intern.getId())
          .then(() => intern.getEmail())
          .then(() => intern.getSchool())
          .then(() => {
            teamMembers.push(intern);
            return chooseOption();
          });
      }
      return;
    });
};

init();
