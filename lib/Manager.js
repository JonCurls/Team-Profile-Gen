const Employee = require("./Employee");
const inquirer = require("inquirer");
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);

    // new Employee().getName("Manager");
    this.officeNumber = officeNum;
    this.role = "manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
