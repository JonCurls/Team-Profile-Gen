const Employee = require("./Employee");
const inquirer = require("inquirer");
class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);

    this.officeNumber = officeNum;
    this.role = "Manager";
  }
  // function to pull office number from object
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
