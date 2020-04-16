var fs = require("fs");
var inquirer = require("inquirer");
var engineer = require("./lib/Engineer.js");
var intern = require("./lib/Intern.js");
var manager = require("./lib/Manager.js");
var renderPage = require("./lib/htmlRenderer.js");

var array = [];

//askUSer

function askUser(){

    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Want to add an employee?",
            choices: ["Yes", "No"]
        }
    ]).then(function(data){
        if(data.addEmployee === "Yes"){
    
            inquirer.prompt([
                {
                    type: "list",
                    name: "employeeType",
                    message: "What employee you wnat to add?",
                    choices: ["Manager", "Engineer", "Intern"]
                }
            ]).then(function(data){
                if(data.employeeType === "Manager"){

                    addManager();
    
                }
                if(data.employeeType === "Engineer"){

                    addEngineer();
    
                }
                if(data.employeeType === "Intern"){
    
                    addIntern();

                }
            });
    
        }
        else{

            fs.writeFile("index.html", renderPage(array), function(err){
                console.log(err);
            })

            console.log("All done");

        }
    })

}

askUser();

//addManager

function addManager(){
    
    inquirer.prompt([
        {
            name: "managerName",
            message: "What is the manager name?"
        },
        {
            name: "managerEmail",
            message: "What is the manager email?"
        },
        {
            name: "managerOffice",
            message: "What is the manager's office number?",
            type: "number"
        }
    ]).then(function(data){
       
        array.push(new manager.Manager(data.managerEmail, data.managerName, array.length, data.managerOffice));

        askUser();

    })

}

//addEngineer

function addEngineer(){
    inquirer.prompt([
        {
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            name: "engineerGit",
            message: "what is the engineer's GitHub?"
        }
    ]).then(function(data){

        array.push(new engineer.Engineer(data.engineerEmail, data.engineerName, array.length, data.engineerGit));

        askUser();

    })
}

//addIntern 

function addIntern(){

    inquirer.prompt([
        {
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            name: "internEmail",
            message: "What is the intern's email?"
        },
        {
            name: "internSchool",
            message: "what is the intern's school?"
        }
    ]).then(function(data){

        array.push(new intern.Intern(data.internEmail, data.internName, array.length, data.internSchool));

        askUser();

    })

}

