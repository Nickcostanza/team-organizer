const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");

//Empty array which will store Team Members

const teamArray = [];

//Prompts for Each Team Member

const managerQuest = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter your name'
    },

    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter your ID number'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter your Email'
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'Pleaase emter your office number?'
    }
]

const engineerQuest = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Enter Engineers name'
    },

    {
        type: 'input',
        name: 'engineerId',
        message: 'Enter Engineers ID'
    },

    {
        type: 'input',
        name: 'engineerGithub',
        message: 'Enter Engineers Github username'
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter Engineers Email address'
    }
]

const internQuest = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter Interns name'
    },

    {
        type: 'input',
        name: 'internId',
        message: 'Enter Interns ID'
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter Interns Email address'
    },

    {
        type: 'input',
        name: 'internSchool',
        message: 'What School does your Intern attend?'
    }

]

const newEmployee = [
    {
        type: 'list',
        name: 'newEmployee',
        mesage: 'Select the Team Member you would like to add next? If done, select finished!',
        choices: ['Engineer', 'Intern', 'Finished']
    }
]

// Starting function to begin with Manager
function init() {
    managerPrompt();
};

//Function that prompts user to select next type of employee
function next() {
    inquirer.prompt(newEmployee).then((response) => {

        console.log(response);
        switch (response.newEmployee) {
            case 'Engineer':
                engineerQuest();
                break;
            case 'Intern':
                internQuest();
                break;
            case 'done';
            console.log('Building Your Team!')
            makeTeam();
        }
    });
};
//function for manager questions
function managerPrompt() {
    inquirer.prompt(managerQuest).then((response) => {

        let name = response.managerName;
        let id = response.managerId;
        let email = response.managerEmail;
        let officeNumber = response.officeNumber;

        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
    }
}