// The require blah blah
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generate-html");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Employees array
const team = [];

// Manager questions
const createManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Would you kindly provide the manager's name?",
      },
      {
        type: "number",
        name: "id",
        message: "Would you kindly provide the manager's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "Would you kindly provide the manager's email address?",
      },
      {
        type: "number",
        name: "officeNum",
        message: "Would you kindly provide the office number?",
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

// Engineer questions
const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Would you kindly provide the engineer's name?",
      },
      {
        type: "number",
        name: "id",
        message: "Would you kindly provide the engineer's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "Would you kindly provide the engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "Would you kindly provide the engineer's github username?",
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

// Intern questions
const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Would you kindly provide the intern's name?",
      },
      {
        type: "number",
        name: "id",
        message: "Would you kindly provide the intern's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "Would you kindly provide the intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "Would you kindly provide the intern's school?",
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

// prints team to HTML
const printTeam = () => {
  const pageHTML = generateHTML(team);
  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    err ? console.log(err) : console.log("HTML successfully created!");
  });
};

// prompts between engineer and intern
const createTeam = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "nextEmp",
      message:
        "Would you kindly provide the type of employee you would like to add?",
      choices: ["Engineer", "Intern", "Finish and build"],
    })
    .then((response) => {
      switch (response.nextEmp) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Finish and build":
          printTeam();
          break;
      }
    });
};
// Starts program
createManager();
