//file writer
const fs = require('fs');

//input inquiry
const inquirer = require('inquirer');
const {
    inflateRawSync
}
= require('zlib');

//linking to different roles
const Employee = require('./userLib/employee.js');
const Casual = require('./userLib/casual.js');
const Engineer = require('./userLib/engineer.js');
const Executive = require('./userLib/executive.js');
const Intern = require('./userLib/intern.js');
const Manager = require('./userLib/manager.js');
const Officer = require('./userLib/officer.js');
const Operations = require('./userLib/operations.js');

//defining page generators
const generateHTML = require('./src/pageTemplate.js');
const writePage = require('./generateSite.js')

//team array
const team = [];

//collecting data
function getDets() {
    inquirer.prompt([{
        type: 'input',
        name: 'ID',
        message: "ID",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                alert('Please enter an ID')
                return false;
            }
            }
        },
        {
        type: 'input',
        name: "name",
        message: "Name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                alert('Please enter a name')
                return false;
            }
            }
        },
        {
        type: 'input',
        name: 'email',
        message: "Employees' Email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                alert('Please enter an email address for this employee')
                return false;
            }
            }
        },
        {
        type: 'list',
        name: 'role',
        message: "Employees' Role",
        choices: ["Casual", "Engineer", "Executive", "Intern", "Manager", "Officer", "Operations"]
        },
    ])

//defining by role
.then(answers => {
    if(answers.role === 'Casual') {
        inquirer.prompt([{
            {
                type: 'input',
                name: 'gitHub',
                message: "Casual's GitHub Account",
                validate: gitInput => {
                    if (gitInput) {
                        return true;
                    } else {
                        alert('Please enter a GitHub Account username')
                        return false;
                    }
                    }
                },
        }])
        .then(answer => {
            const someCasual = new Casual(answers.id, answers.name, answers.email, answers.role, answers.gitHub)
            team.push(someCasual);
            addMore()
        })
    }else if(answers.role === 'Engineer') {
        inquirer.prompt([{
            {
                type: 'input',
                name: 'gitHub',
                message: "Engineer's GitHub Account",
                validate: gitInput => {
                    if (gitInput) {
                        return true;
                    } else {
                        alert('Please enter a GitHub Account username')
                        return false;
                    }
                    }
                },
        }])
        .then(answer => {
            const someEngineer = new Engineer(answers.id, answers.name, answers.email, answers.role, answers.gitHub)
            team.push(someEngineer);
            addMore()
        })
    }else if(answers.role === 'Executive') {
            inquirer.prompt([{
                {
                    type: 'input',
                    name: 'gitHub',
                    message: "Executive's GitHub Account",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            alert('Please enter a GitHub Account username')
                            return false;
                        }
                        }
                    },
            }])
            .then(answer => {
                const someExecutive = new Executive(answers.id, answers.name, answers.email, answers.role, answers.gitHub)
                team.push(someExecutive);
                addMore()
            })
        }else if(answers.role === 'Intern') {
            inquirer.prompt([{
                {
                    type: 'input',
                    name: 'gitHub',
                    message: "Intern's GitHub Account",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            alert('Please enter a GitHub Account username')
                            return false;
                        }
                        }
                    },
            }])
            .then(answer => {
                const someIntern = new Intern(answers.id, answers.name, answers.email, answers.role, answers.gitHub)
                team.push(someIntern);
                addMore()
            })
        }else if(answers.role === 'Manager') {
            inquirer.prompt([{
                {
                    type: 'input',
                    name: 'gitHub',
                    message: "Manager's GitHub Account",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            alert('Please enter a GitHub Account username')
                            return false;
                        }
                        }
                    },
            }])
            .then(answer => {
                const someManager = new Manager(answers.id, answers.name, answers.email, answers.role, answers.gitHub)
                team.push(someManager);
                addMore()
            })
        }else if(answers.role === 'Officer') {
            inquirer.prompt([{
                {
                    type: 'input',
                    name: 'gitHub',
                    message: "Officer's GitHub Account",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            alert('Please enter a GitHub Account username')
                            return false;
                        }
                        }
                    },
            }])
            .then(answer => {
                const someOfficer = new Officer(answers.id, answers.name, answers.email, answers.role, answers.gitHub)
                team.push(someOfficer);
                addMore()
            })
        }else if(answers.role === 'Operations') {
            inquirer.prompt([{
                {
                    type: 'input',
                    name: 'gitHub',
                    message: "Operation's GitHub Account",
                    validate: gitInput => {
                        if (gitInput) {
                            return true;
                        } else {
                            alert('Please enter a GitHub Account username')
                            return false;
                        }
                        }
                    },
            }])
            .then(answer => {
                const someOperations = new Operations(answers.id, answers.name, answers.email, answers.role, answers.gitHub)
                team.push(someOperations);
                addMore()
            })
        }else{
                const someEmployee = new Employee(answers.id, answers.name, answers.email, answers.role, answers.gitHub)
                team.push(someEmployee);
                addMore()
            }
        function addMore() {
            inquirer.prompt([{
                type: 'confirm',
                name: 'addNew',
                message: 'Add another employee?',
            }])
        .then(res => {
            if(res.addNew === true){
                getInfo(team)
            }
            else {
                let theCardHTML = generatePage(team)
                writeHTML(theCardHTML)
            }
        })

    }
})

}