var fs = require("fs");

function generateMarkdown(response, answers) {
  var userInfo = `

<img src = "![Badge](https://img.shields.io/static/v1?label=License&message=MIT&color=COLOR?style=plastic)">

# Title of Project
${answers.projectName};

#Description of Project
${ answers.description}

#Table of Contents

#Installation Steps
${ answers.installSteps}

#Usage
${ answers.usage}

#Type of License
${ answers.license}

#Technologies Used
${ answers.technologies}

#Contributors
${ answers.contributors}

#Tests
${ answers.runTests}

#Questions ?
Email me @:`


  fs.writeFile("autoREADME.md", userInfo, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("Success");
  })
}


module.exports = generateMarkdown;
