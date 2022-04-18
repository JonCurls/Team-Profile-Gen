const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = github;
  }
  // function to pull github name from object
  getGitHub() {
    return this.github;
  }
}

module.exports = Engineer;
