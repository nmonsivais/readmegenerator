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
  ]);
}
readmeQuestions();

// const questions = [];

// function writeToFile(fileName, data) {}

// function init() {}

// init();
