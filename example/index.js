const Manager = require("./Manager");
const inquirer = require("inquirer");
const fs = require("fs");

const init = async () => {
  const managerData = await getManagerDetails();
  const engineerData = await getEngineerDetails();

  let data = fs.readFileSync("index.html");
  data = data.replace("{{ENGINEERING_MANAGER_PLACEHOLDER}}", managerData);
};

function getManagerDetails() {
  return inquirer([{}]).then((data) => {
    // convert the input into html

    return `div class="body-card">
            <div class="information-card">
              <p>ID:${data.id}</p>
              <p>Email: <a href="mailto: abc@email.com">Email</a></p>
              <p>Office number:</p>
            </div>
          </div>`;
  });
}

function getEngineerDetails() {
  return inquirer([{}]);
}

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
