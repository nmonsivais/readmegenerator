

function generateMarkdown(response, answers) {
  console.log(response, answers);
  return `
  # Title

  ![Badge](https://img.shields.io/static/v1?label=License&message=MIT&color=COLOR?style=plastic)

  #Description of Project

  #Table of Contents

  #Installation Steps

  #Usage

  #License

  #License

  #Contributors

  #Tests

  #Questions?

 

  `;
}

module.exports = generateMarkdown;
