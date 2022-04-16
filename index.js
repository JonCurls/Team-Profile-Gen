const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generate-html");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];

const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is the manager's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
      {
        type: "number",
        name: "officeNum",
        message: "What is the office number?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNum
      );
      team.push(manager);
      createTeam();
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is the engineer's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      team.push(engineer);
      createTeam();
    });
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "number",
        name: "id",
        message: "What is the intern's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      team.push(intern);
      createTeam();
    });
};

const printTeam = () => {
  const pageHTML = generateHTML(team);
  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    err ? console.log(err) : console.log("HTML successfully created!");
  });
};

const createTeam = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "nextEmp",
      message: "What type of employee would you like to add?",
      choices: ["Engineer", "Intern", "Finish"],
    })
    .then((response) => {
      switch (response.nextEmp) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Finish":
          printTeam();
          break;
      }
    });
};

createManager();
