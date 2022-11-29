let Employee = require('./Employee');

class Engineer extends Employee {

    constructor(engineer_name, engineer_id, gitHub_username) {
        super();
        this.name = engineer_name;
        this.id = engineer_id;
        this.github = gitHub_username;
    }

    getGithub() {
        return this.gitHub_username;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;