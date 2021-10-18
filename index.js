// build an HMTL page that shows team members and their information
// use inquirer to create the prompts in Node.js
 // first prompt will ask user to "Please build your team"
  // starts by asking for the manager's information
    // the prompts will ask user for:
      // name
      // id #
      // email address
      // office phone #
      // here, user is prompted with question "What type of team member would you like to add?"
        // engineer
        // intern
        // i don't want to add anymore
          // then, questions about the employee
            // employee name
            // employee id
            // employee email
            // employee github
            // then, back to...
      // here, user is prompted with question "What type of team member would you like to add?"
        // engineer
        // intern
        // i don't want to add anymore
// once "I don't want to add anymore has been selected" then generate an team.html file which can be launched in the browser to show team info
  // style the html page in the output folder style.css and have the team.html file generate to that folder too

// NOTE: Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.
  // need to do testing on functions using Jest (npm)

/* GARY'S TIPS (USE CLASSES!!)
  Use functions as a way of controlling the flow of questions
  Use classes as a means of controlling data for each employee type
    Employee
      Manager
      Engineer
      Intern
  When inquierer gathers up responses, you should be instantiating an object for each employee type
*/

const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = [];

const questions = [
  {
    type: "input",
    message: "Please enter your name: ",
    name: "name"
  },
  {
    type: "input",
    message: "Please enter your email address: ",
    name: "email"
  },
  {
    type: "input",
    message: "Please enter your employee ID: ",
    name: "id"
  },
  {
    type: "list",
    message: "Please select your job title (role): ",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"]
  }
];

// STOPPED HERE SUNDAY NIGHT
  // need to adjust id's in card
  // need to add jQuery, make sure I'm calling functions in the correct places within the HTML ${HERE}
  
function generateHtmlCard() {
  `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 id="employee-role" class="card-title"></h5>
    <p id="" class="card-text"></p>
    <p class="card-text"></p>
    <p class="card-text"></p>
  </div>`
}

function generateHtmlSkel() {
  `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="./output/style.css" />
  <title>Team Profile</title>
</head>
<body>

  <header class="container-fliud">
    <nav class="navbar navbar-dark bg-primary justify-content-center">
      <h1>Team Profile</h1>
    </nav>
  </header>

  <main>
    <div class="container-fluid row col-12">

        <div class="card-deck container-fluid row">
          
          ${GENERATECARDHERE}

          </div>
        </div>
  </main>
  
</body>
</html>`
};

function addAdtl() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Would you like to add another team member?",
        name: "addEmployee",
      }
    ])
    .then(response => {
      if (response.addEmployee === true) {
        init(team)
      } else {
        generateHtmlSkel()
      }
    })
};

function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      if (answers.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Please enter your office number: ",
              name: "office"
            }
          ])
          .then(response => {
            const TeamManager = new Manager(answers.name, answers.email, answers.id, answers.role, response.office)
            team.push(TeamManager)
            addAdtl()
          });
      } else if (answers.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Please enter your github username: ",
              name: "github"
            }
          ])
          .then(response => {
            const EngineerOnTeam = new Engineer(answers.name, answers.email, answers.id, answers.role, response.github)
            team.push(EngineerOnTeam)
            addAdtl()
          });
      } else if (answers.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "Please enter your school name: ",
              name: "school"
            }
          ])
          .then(response => {
            const InternOnTeam = new Intern(answers.name, answers.email, answers.id, answers.role, response.school)
            team.push(InternOnTeam)
            addAdtl()
          })
      }
    })
};

init();