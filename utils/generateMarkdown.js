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
  if(license==='Apache'){
    return `[![License](${renderLicenseBadge(license)})](https://opensource.org/licenses/Apache-2.0)`
  } else if (license==='GNU GPLv3'){
    return `[![License](${renderLicenseBadge(license)})](http://www.gnu.org/licenses/gpl-3.0)`

  } else if (license==='MIT'){
    return `[![License](${renderLicenseBadge(license)})](https://opensource.org/licenses/MIT)`
  } else if (license==="ISC"){
    return `[![License](${renderLicenseBadge(license)})](https://opensource.org/licenses/ISC)`
  } else { return "" }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if(license==='Apache'){
    return `[Released under the ${license} license](https://opensource.org/licenses/Apache-2.0)`
  } else if (license==='GNU GPLv3'){
    return `[Released under the ${license} license](http://www.gnu.org/licenses/gpl-3.0)`

  } else if (license==='MIT'){
    return `[Released under the ${license} license](https://opensource.org/licenses/MIT)`
  } else if (license==="ISC"){
    return `[Released under the ${license} license](https://opensource.org/licenses/ISC)`
  } else { return "" }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseLink(data.license)}

  # Table of Contents
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [License](#license)
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
  ${renderLicenseSection(data.license)}

  # Questions
  If you have any questions, you can reach me at [${data.email}](${data.email})
  or you can reach me at at my [github repo](https://github.com/${data.username})




`;
}

module.exports = generateMarkdown;
