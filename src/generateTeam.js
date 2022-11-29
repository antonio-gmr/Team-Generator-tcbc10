let nameTeam = require('../index.js');
const Manager = require('../lib/Manager.js');
const generateEngineerHtml = require('./generateengineer.js');
const generateInternHtml = require('./generateintern.js');
const generateManagerHtml = require('./generatemanager.js');

const generateTeamHtml = function (employees) {


    
    const managers = employees.filter(manager => manager.getRole() === 'Manager')
    const engineers = employees.filter(engineer => engineer.getRole() === 'Engineer')
    const interns = employees.filter(intern => intern.getRole() === 'Intern')
    console.log(managers);
    console.log(engineers);
    console.log(interns);

   const managerHtml = managers.map(generateManagerHtml)
   console.log(managerHtml);

   const engineerHtml = engineers.map(generateEngineerHtml)
   console.log(engineerHtml);

   const internHtml = interns.map(generateInternHtml)
   console.log(internHtml);
    
    return `


    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles/styles.css">
    <title>My Tech Team</title>
</head>
<body>
    <div class="jumbotron d-flex justify-content-center">
        <h1 class="display-3">My Tech Team</h1>
    </div>
    <!-- Container for manager -->
    <div class="container w-100 d-flex justify-content-center">
    ${managerHtml.join()}
    </div>
    
    <!-- Container for Engineer and Interns -->
    <div class="row main-div">
        <div class="col-6 category-div">
            <div class="row row-cols-2">
            ${engineerHtml.join()}
            </div>
        </div>
        
        <div class="col-6 category-div" >
            <div class="row row-cols-2">
            ${internHtml.join()}
            </div>
        </div>
    </div>
    
</body>
</html>
    `
}

module.exports = generateTeamHtml

