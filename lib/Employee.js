const inquirer = require("inquirer");

// generic base class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }
  // function to pull name from object
  getName() {
    return this.name;
  }
  // function to pull id from object
  getId() {
    return this.id;
  }
  // function to pull email from object
  getEmail() {
    return this.email;
  }
  // function to pull role from object
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
