// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "return a license badge"){
    return 'true'
  }
  if (license ==== "no license found"){
    return '',
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "return a license link"){
    return 'true'
  }
  if (license ==== "no license link found"){
    return '',
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "return a license README") {
    return 'true'
  }
  if (license ==== "no license README found"){
    return '',
  }
}

// TODO: Create a function to generate markdown for README
function readMeGenerator(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## ${data.description}

## ${renderLicenseLink(data.license)}


## \`\`\`
${data.installation}
\`\`\`

## ${data.usage}

${renderLicenseSection(data.license)}
  

##

\`\`\`
${data.test}
\`\`\`

## ${data.email}. 
[${data.github}](https://github.com/NihalAbdalla/${data.github}/).`;
}

module.exports = readMeGenerator;
