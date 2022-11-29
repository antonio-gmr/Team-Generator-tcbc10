const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
let Manager = require('./lib/Manager');
let Engineer = require('./lib/Engineer');
let Employee = require('./lib/Employee');
let Intern = require('./lib/Intern');
let generateManagerHtml = require('./src/generatemanager');
let generateEngineerHtml = require('./src/generateengineer');
let generateInternHtml = require('./src/generateintern');
let generateTeamHtml = require('./src/generateTeam');
let htmlString = "";
var globalContext = [];

var managerOutput;
function managerPrompt() {
    inquirer.prompt([
        {

            type: 'prompt',
            message: 'What´s the manager´s name?',
            name: 'manager_name',
        },

        {

            type: 'prompt',
            message: 'What´s the Employee id?',
            name: 'Employee_id',
        },

        {

            type: 'prompt',
            message: 'What´s the email address?',
            name: 'email_address',
            validate: (managerMail) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(managerMail);
                if (!valid) { console.error(' ', "\x1b[41m", ' <<<< Please enter a valid email >>>> ', "\x1b[0m") };
                return valid;
            }
        },

        {

            type: 'prompt',
            message: 'What´s thr office number?',
            name: 'office_number',
        },


    ]).then((answers) => {

        globalContext.push(
            new Manager(answers.manager_name, answers.Employee_id, answers.email_address, answers.office_number)
        )

        additionalOptions();

    })
}

function additionalOptions() {
    inquirer.prompt([


        {
            type: 'list',
            name: 'memberRole',
            message: '\nPlease indicate if you want to add an Engineer or an Intern?\n',
            choices: ['Engineer', 'Intern'],
        },

    ]).then((answers) => {

        if (answers.memberRole === 'Engineer') {
            engineerQuestions();
        } else if (answers.memberRole === 'Intern') {
            internQuestions();
        }
    })

}


var engineerOutput;
function engineerQuestions() {
    inquirer.prompt([
        {
            type: 'prompt',
            message: "Whats the engineer´s name ?",
            name: 'engineer_name'
        },

        {
            type: 'prompt',
            message: "Whats the engineer´s id?",
            name: 'engineer_id'
        },
        {
            type: 'prompt',
            message: "Whats the your github username?",
            name: 'github_username'
        },

    ]).then((answers) => {


        globalContext.push(new Engineer(answers.engineer_name, answers.engineer_id, answers.github_username))


        continue_or_stop();
    }
    )

}

var internOutput;
function internQuestions() {
    inquirer.prompt([
        {
            type: 'prompt',
            message: "Whats the intern´s name ?",
            name: 'intern_name'
        },

        {
            type: 'prompt',
            message: "Whats the intern´s id?",
            name: 'intern_id'
        },

        {
            type: 'prompt',
            message: "Whats the intern´s email?",
            name: 'intern_email',
            validate: (internMail) => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(internMail);
                if (!valid) { console.error(' ', "\x1b[41m", ' <<<< Please enter a valid email >>>> ', "\x1b[0m") };
                return valid;
            }
        },
        {
            type: 'prompt',
            message: "Whats the intern´s school?",
            name: 'intern_school'
        },



    ]).then((answers) => {


        globalContext.push(new Intern(answers.intern_name, answers.intern_id, answers.intern_email, answers.intern_school))

        
        continue_or_stop();
    }
    )
}

function continue_or_stop() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addAnother',
            message: 'Do you want to add another team member?',
            choices: ['Yes', 'No']
        }
    ]).then((answers) => {

        if (answers.addAnother === 'Yes') {
            additionalOptions();
        }
        else if (answers.addAnother === 'No') {
            GenerateHTML(globalContext)
            console.log('HTML generated');
        }

    }
    )

}

function GenerateHTML(globalContext) {
 
    if (globalContext.length > 0) {
        fs.writeFile('./dist/team.html', generateTeamHtml(globalContext), err => {
            if (err) {
                console.error(err);
            }
            console.log('File written successfully!')
        });
    }

}

managerPrompt();