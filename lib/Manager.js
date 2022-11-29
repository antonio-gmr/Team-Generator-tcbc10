let Employee = require('./Employee');
class Manager extends Employee {
    constructor(manager_name, Employee_id, email_address, officeNumber) {
        super();
        this.name = manager_name;
        this.id = Employee_id;
        this.email = email_address;
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {

        return this.officeNumber,
        this.name,
        this.email,
        this.id 
    }

    getRole() {

        return 'Manager';
    }
}

module.exports = Manager;