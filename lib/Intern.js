let Employee = require('./Employee');


class Intern extends Employee {
    constructor(intern_name, intern_id, intern_email, intern_school) {
        super();
        this.name = intern_name;
        this.id = intern_id;
        this.email = intern_email;
        this.school = intern_school;


    }

    getSchool() {
        return this.school;
    }

    getRole() {

        return 'Intern';
    }

}

module.exports = Intern;