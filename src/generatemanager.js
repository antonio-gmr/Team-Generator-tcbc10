let nameManager = require('../index.js')
const generateManagerHtml = function (managerObj) {
 
    return `


     <div class="manager-card card mb-3">
     <div class="row no-gutters">
         <div class="col-md-2 card-img  bg-light icon-space">
         <img src="./images/manager.png" class="icon-2 card-img-top" alt="...">
         </div>
         <div class="col-md-9">
             <div class="card-body">
                 <h3 class="card-title">${managerObj.name}</h3>
                 <p class="lead">Manager</p>
                 <p class="card-text">Employee ID: ${managerObj.id}</p>
                 <p class="card-text">e-mail: <a href="mailto:">${managerObj.email}</a></p>
                 <p class="card-text">Office Number: ${managerObj.officeNumber}</p>
             </div>
         </div>
     </div>
 </div>
`
  }

  module.exports = generateManagerHtml
  
