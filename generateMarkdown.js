const licenseUrl = {
  'apache-2.0': "https://opensource.org/licenses/Apache-2.0",
  'bsd-3-clause': "https://opensource.org/licenses/BSD-3-Clause",
  'epl-1.0': "https://opensource.org/licenses/EPL-1.0",
  'gpl-3.0': "https://www.gnu.org/licenses/gpl-3.0",
  'mit': "https://opensource.org/licenses/MIT",
  'mpl-2.0': "https://opensource.org/licenses/MPL-2.0",
  'wtfpl': "http://www.wtfpl.net/about/"
}

const licenseBadge = {
  'apache-2.0': "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
  'bsd-3-clause': "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
  'epl-1.0': "https://img.shields.io/badge/License-EPL_1.0-red.svg",
  'gpl-3.0': "https://img.shields.io/badge/License-GPLv3-blue.svg",
  'mit': "https://img.shields.io/badge/License-MIT-yellow.svg",
  'mpl-2.0': "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
  'wtfpl': "https://img.shields.io/badge/License-WTFPL-brightgreen.svg"
}

// TODO: Create a function that returns a license badge based on which license is passed in

function renderLicenseBadge(licenseName) {
  return licenseBadge[licenseName];
  /*
  let obj = {
    prop: value,
  };
  obj["key2"] = "name";
  console.log(obj.prop);
  console.log(obj['prop']);
  let keyName = 'prop';
  console.log(obj[keyName]);
    => console.log(obj['prop']);
  */

}



// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  return licenseUrl[license];
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return '';
  }
  let badgeUrl = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  return `## License
  [![License:${license}](${badgeUrl})](${licenseLink})
  `;

};


const generateMarkdown = ({ title, description,
  installation, usage, contributionGuidelines,
  testInstructions, license, githubUserName, email }) =>
  `# ${title}

## Description
 ##### ${description}

 # Table of contents
[Description](#description)
    
[Installation](#installation)
    
[Usage](#usage)
    
[Contribution Guidelines](#contributionguidelines)
    
[Test Instructions](#testinstructions)
    
${license === "none" ? "" : "[License](#license)"}
    
    
## Installation
${installation}
    
## Usage
${usage}
    
## Contribution Guidelines
###### ${contributionGuidelines}
    
    
## Test Instructions
###### ${testInstructions}
    
## Github Username
##### <a href="https://github.com/${githubUserName}/">Click here to go to my Github repository page.</a></br>

## Email
##### ${email}
    
${renderLicenseSection(license)}`;


module.exports = generateMarkdown;

// to take input and replace in correct spots
//makes license coniditonal show or not
//license table of content shown if its there or not
