//Global variables
require('dotenv').config();
var fs = require("fs");
var inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdownd");
const api = require("./utils/api");
const questions = inquirer;

// api.getUser("nmonsivais");


function readmeQuestions() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your first and last name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your Github Username?",
      name: "userName",
    },
    {
      type: "input",
      message: "Briefly describe your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "projectName",
    },
    {
      type: "input",
      message: "What are the installation steps?",
      name: "installSteps",
    },
    {
      type: "checkbox",
      message: "What technologies did you use?",
      choices: [
        "HTML",
        "JavaScript",
        "jQuery",
        "AJAX",
        "CSS",
        "Bootstrap",
        "APIs",
      ],
      name: "technologies",
    },
    {
      type: "checkbox",
      message: "What license is included in your project?",
      choices: ["MIT", "ISC", "initialCommit"],
      name: "license",
    },
    {
      type: "input",
      message: "Usage?",
      name: "usage",
    },
    {
      type: "input",
      message: "Who contributed to this project?",
      name: "contributors",
    },
    {
      type: "input",
      message: "How do you run the tests?",
      name: "runTests",
    },
  ])

    .then(function (answers) {
      let username = answers.username;
      generateMarkdown(username, answers);
    });
}

readmeQuestions();

module.exports = questions;

function init() { }

init();
