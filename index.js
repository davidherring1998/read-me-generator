
const inquirer = require('inquirer')
const fs = require('fs')

// creating the questions in the console
inquirer
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "what is your project's description?"
    },
    {
        type: "input",
        name: "table",
        message: "table of content?",
    },
    {
        type: 'input',
        name: "installation",
        message: "what are the installation requirements? ",
    }, {
        type: "input",
        name: "usage",
        message: "Usage?"
    },
    {
        type: "input",
        name: "contributes",
        message: "Is there any contributes?"
    },
    {

        type: 'list',
        message: "License?",
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'UNLICENSE']
    }, 
    {
        type: "input",
        name: "test",
        message: "Test?"
    },
    {
      type: "list",
      name: "status",
      message: "Current status?",
      choices: ['passing', 'failing', 'unknown']
    },
    {
        type: "input",
        name: "question",
        message: "Any Questions?"
    }, 
    {
        type: "input",
        name: "githubUser",
        message: "GitHub Username?"
    },
    {
        type: "input",
        name: "githubLink",
        message: "GitHub Link?"
    },
    {
        type: "input",
        name: "email",
        message: "Email?"
    }
  ])


  .then(({
    // calling the names from the question objects.
    title, 
    description,
    table,
    installation,
    usage,
    contributes,
    license,
    test,
    question,
    githubUser,
    githubLink,
    email,
    status
  }) => {
    // creating the layout for the read me 
    const layOut =  ` ${title}
    ## This application is covered under the ${license} license.
    ## Current status: ${status}
    ## Description : ${description}
    ## Table of Contents : ${table}
    ## Installation requirements : ${installation}
    ## Usage : ${usage}
    ## Contributes : ${contributes}
    ## Tests : ${test}
    ## Questions & contact information : ${question}' GitHub username : ${githubUser} GitHub link : ${githubLink}
    Email ${email} with additional questions.`;
    
    // calling function to create the readme
    createNew(title,layOut);
    });

    // function to create the readme 
  function createNew(fileName, data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
      err ? console.log('Try again, there was an error.') : console.log('Successful, Your readMe was created!');
    })
  };

