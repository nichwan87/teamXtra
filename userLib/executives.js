/* following classes to be added
ID
NAME
EMAIL
ROLE
GITHUB
*/

const Employee = require('./employee.js');

class Executive extends Employee {
    constructor(id, name, email, gitHub, role) {
        super(id, name, email, role)
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
}
module.exports = Executive;