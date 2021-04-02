// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>

    if(license!=="None"){
      return `https://img.shields.io/static/v1?label=License&message=${license}&color=blue`
    } else {
      return ""
    }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if(license)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Description
  ${data.description}

  # Installation
  ${data.instructions}

  # Usage
  ${data.usage}

  # Contributions
  ${data.contribution}

  # Tests
  ${data.test}

  # License
  ${data.license}

  # Questions
  If you have any questions, you can reach me at [${data.email}](${data.email})
  or you can reach me at at my [github repo](https://github.com/${data.username})




`;
}

module.exports = generateMarkdown;
