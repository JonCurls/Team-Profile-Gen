const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "engineer";
    this.github = github;
  }
}

module.exports = Engineer;
