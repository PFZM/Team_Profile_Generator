const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const fs = require("fs");

const teamMembers = [];
const employeeCards = [];

const init = async () => {
  console.log("Please build your team");
  await getEmployeeDetails("Manager");
  await chooseOption();
  console.log(employeeCards.join(""));
  renderEmployeeCards();
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
        const managerCard = `<div class="card manager-role">
          <div class="name-role">
            <h2>${manager.name}</h2>
            <i class="fa fa-briefcase role"> Manager</i>
          </div>
          <div class="body-card">
            <div class="information-card">
              <p>ID: ${manager.id}</p>
              <p>Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
              <p>Office number: ${manager.officeNumber}</p>
            </div>
          </div>
        </div>`;
        employeeCards.push(managerCard);
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
        const engineerCard = `<div class="card Engineer-role">
          <div class="name-role">
            <h2>${engineer.name}</h2>
            <i class="fas fa-laptop role"> Engineer</i>
          </div>
          <div class="body-card">
            <div class="information-card">
              <p>ID: ${engineer.id}</p>
              <p>Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
              <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
          </div>
        </div>`;
        employeeCards.push(engineerCard);
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
        const internCard = `<div class="card intern-role">
          <div class="name-role">
            <h2>${intern.name}</h2>
            <i class="fas fa-user-graduate role"> Intern</i>
          </div>
          <div class="body-card">
            <div class="information-card">
              <p>ID: ${intern.id}</p>
              <p>Email: <a href="mailto: ${intern.email}">${intern.email}</a></p>
              <p>University: ${intern.school}</p>
            </div>
          </div>
        </div>`;
        employeeCards.push(internCard);
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

function renderEmployeeCards() {
  const data = fs.readFileSync("./src/index.html", "utf8");
  const result = data.replace(
    "{{MANAGER_ENGINEER_INTERN_PLACEHOLDER}}",
    employeeCards.join("\n")
  );
  fs.writeFileSync("./dist/employees.html", result);
}

init();
