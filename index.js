const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const fs = require("fs");

const teamMembers = [];

const init = async () => {
  console.log("Please build your team");
  await getEmployeeDetails("Manager");
  await chooseOption();
  console.log(teamMembers);

  let cards = fs.readFileSync("./dist/index.html");
};

async function getEmployeeDetails(employeeRole) {
  const role = employeeRole;
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your ${role}'s name?`,
    },
    {
      type: "input",
      name: "ID",
      message: `What is your ${role}'s id?`,
      validate: (val_1) => /^[0-9]+$/.test(val_1),
    },
    {
      type: "input",
      name: "email",
      message: `What is your ${role}'s email?`,
      validate: (val_3) =>
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          val_3
        ),
    },
  ]);
  if (role === "Manager") {
    return inquirer
      .prompt({
        type: "input",
        name: "office",
        message: "What is your Manager's office number?",
        validate: (val_5) => /^[0-9]+$/.test(val_5),
      })
      .then((answer) => {
        const manager = new Manager(
          answers.name,
          answers.ID,
          answers.email,
          answer.office
        );
        teamMembers.push(manager);
        return;
      });
  } else if (role === "Engineer") {
    return inquirer
      .prompt({
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?",
      })
      .then((answer_1) => {
        const engineer = new Engineer(
          answers.name,
          answers.ID,
          answers.email,
          answer_1.GitHub
        );
        teamMembers.push(engineer);
      });
  } else if (role === "Intern") {
    return inquirer
      .prompt({
        type: "input",
        name: "school",
        message: "What is your school's name?",
      })
      .then((answer_2) => {
        const intern = new Intern(
          answers.name,
          answers.ID,
          answers.email,
          answer_2.school
        );
        teamMembers.push(intern);
      });
  }
}

function chooseOption() {
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
    .then(async (choice) => {
      if (choice.options === "Engineer") {
        await getEmployeeDetails("Engineer");
        return chooseOption();
      }

      if (choice.options === "Intern") {
        await getEmployeeDetails("Intern");
        return chooseOption();
      }
      return;
    });
}

init();
