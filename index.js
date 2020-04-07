//Global variables
var fs = require("fs");
var inquirer = require("inquirer");
var axios = require("axios");

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
  ]);
}
readmeQuestions();

// const questions = [];

// function writeToFile(fileName, data) {}

// function init() {}

// init();
