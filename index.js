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

